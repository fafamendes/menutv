import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import styles from './Slider.module.css';

interface SliderProps {
  data?: any,
  delay?: number
}

interface Product {
  name: string,
  price: number,
  url?: string,
  productImageUrl?: string,
  qrCodePix?: string,
}

interface Slide {
  title: string,
  products?: Product[]
}

const { innerWidth: width, innerHeight: height } = window;

function Slider({ data = [], delay = 1000 }: SliderProps) {

  const drawSlides = useCallback(() => {
    let elements: ReactElement[] = []

    data.map((slide: Slide, key: number) => {
      elements.push(<SplideSlide key={`slide-${key}`}><SlidePage key={`slide-page-${key}`} title={slide.title} products={slide.products} /></SplideSlide>)
    });
    return elements;
  }, [data])



  return (
    <>
      <Splide hasTrack={false} options={{
        type: 'loop',
        autoplay: true,
        pagination: false,
        arrows: false,
        speed: 500,
        interval: 5000
      }} className={`splide ${styles.splide}`}>
        <SplideTrack>
          {drawSlides()}
        </SplideTrack>
      </Splide>
    </>
  );
}


function SlidePage({ title, products }: Slide, key: number) {
  return (
    <div key={key} style={{ width }} >
      <h1>{title}</h1>
      {
        products?.map((product: Product) =>
          <div key={product.name}>
            <h3>{product.name}</h3>
            <div>
              <span>{product.price}</span>
            </div>
          </div>)
      }
    </div >
  )
}

export default Slider;