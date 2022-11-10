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
  orientation: 'left' | 'right',
  portion?: string
}

interface interfaceSlide {
  title: string,
  products?: interfaceProduct[]
  backgroundImageCategoryUrl?: string,
}

const { innerHeight } = window;

function Slider({ data = [], delay = 1000 }: interfaceSliderProps) {

  const drawSlides = useCallback(() => {
    let elements: ReactElement[] = []

    data.map((slide: interfaceSlide, key: number) => {
      return elements.push(
        <SplideSlide key={`slide-${key}`}>
          <SlidePage key={`slide-page-${key}`}
            title={slide.title}
            products={slide.products}
            backgroundImageCategoryUrl={slide.backgroundImageCategoryUrl} />
        </SplideSlide>)
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
        <SplideTrack className={`${styles.track}`}>
          {drawSlides()}
        </SplideTrack>
      </Splide>
    </>
  );
}


function SlidePage({ title, products, backgroundImageCategoryUrl }: interfaceSlide, key: string) {
  let style = {
    backgroundImage: backgroundImageCategoryUrl ? `url('${backgroundImageCategoryUrl}')` : '',
  }

  return (
    <div className={styles.page} style={style} key={key}>
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
                description={product.description}
                portion={product.portion}
                key={key}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

function Product({ name, price, orientation, productImageUrl, description, portion }: interfaceProduct, key: number) {
  let productHeight = (innerHeight - 120 - (innerHeight * 30 / 100)) / 4;
  return (
    <>
      <div style={{ minHeight: productHeight / 2 }} className={`${styles.product} ${styles[orientation]}`} key={name + '-' + key}>
        {productImageUrl && <img style={{ maxHeight: productHeight }} alt={name} src={productImageUrl} />}
        <h2 className={styles.productName}>{name}</h2>
        <div className={styles.productDetails}>
          <div className={styles.description}>
            <span>
              {description}
            </span>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.price}>{price}</span>
            <span className={styles.portion}>{portion?.toUpperCase()}</span>
          </div>
        </div>
      </div >
      <div className={styles.divider}></div>
    </>
  )
}

export default Slider;