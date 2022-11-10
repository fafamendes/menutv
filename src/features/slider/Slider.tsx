import React, { ReactElement, useCallback, } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import styles from './Slider.module.css';

interface interfaceSliderProps {
  data?: any,
  delay?: number
}

interface interfaceProduct {
  name: string,
  description?: string,
  price: number,
  url?: string,
  productImageUrl?: string,
  qrCodePix?: string,
  orientation: 'left' | 'right';
}

interface interfaceSlide {
  title: string,
  products?: interfaceProduct[]
}

const { innerHeight } = window;

function Slider({ data = [], delay = 1000 }: interfaceSliderProps) {

  const drawSlides = useCallback(() => {
    let elements: ReactElement[] = []

    data.map((slide: interfaceSlide, key: number) => {
      return elements.push(<SplideSlide key={`slide-${key}`}><SlidePage key={`slide-page-${key}`} title={slide.title} products={slide.products} /></SplideSlide>)
    });
    return elements;
  }, [data])

  return (
    <>
      <Splide hasTrack={false} options={{
        type: 'loop',
        autoplay: false,
        pagination: false,
        arrows: false,
        speed: 500,
        interval: 5000
      }} className={`splide ${styles.splide}`}>
        <SplideTrack className={`${styles.track}`}>
          {drawSlides()}
        </SplideTrack>
      </Splide>
    </>
  );
}


function SlidePage({ title, products }: interfaceSlide, key: string) {
  return (
    <div className={styles.page} key={key}>
      <div>
        <h1>{title.toLocaleUpperCase()}</h1>
        <div>
          {
            products?.map((product: interfaceProduct, key: number) =>
              <Product
                name={product.name.toUpperCase()}
                price={product.price}
                productImageUrl={product.productImageUrl}
                orientation={key % 2 === 0 ? 'left' : 'right'}
                key={key}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

function Product({ name, price, orientation, productImageUrl }: interfaceProduct, key: number) {
  console.log(orientation)
  return (
    <>
      <div style={{ minHeight: ((innerHeight - innerHeight * 40 / 100) / 4) }} className={`${styles.product} ${styles[orientation]}`} key={name + '-' + key}>
        {productImageUrl && <img style={{ maxHeight: ((innerHeight - innerHeight * 40 / 100) / 4) }} alt={name} src={productImageUrl} />}
        <h3>{name}</h3>
        <div className={styles.productDetails}>
          <span>{price}</span>
        </div>
      </div >
      <div className={styles.divider}></div>
    </>
  )
}

export default Slider;