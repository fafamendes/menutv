import React, { ReactElement, useCallback, useState, useEffect } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import styles from './Slider.module.css';

interface interfaceSliderProps {
  data?: any,
  interval?: number
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
  interval: number,
  countdownFlag?: boolean,
}

const { innerHeight } = window;

function Slider({ data = [], interval = 3000 }: interfaceSliderProps) {

  const [countdownFlag, setCountdownFlag] = useState(false)

  const drawSlides = useCallback(() => {
    let elements: ReactElement[] = []
    data.map((slide: interfaceSlide, key: number) => {
      return elements.push(
        <SplideSlide key={`slide-${key}`}>
          <SlidePage key={`slide-page-${key}`}
            title={slide.title}
            products={slide.products}
            countdownFlag={countdownFlag}
            backgroundImageCategoryUrl={slide.backgroundImageCategoryUrl}
            interval={interval}
          />
        </SplideSlide>)
    });
    return elements;
  }, [data, interval, countdownFlag])

  return (
    <>
      <Splide hasTrack={false}
        onMove={() => setCountdownFlag(() => true)}
        onMoved={() => setCountdownFlag(() => false)}
        options={{
          type: 'loop',
          autoplay: true,
          pagination: false,
          arrows: false,
          speed: 500,
          interval: interval,
        }} className={`splide ${styles.splide}`}>
        <SplideTrack className={`${styles.track}`}>
          {drawSlides()}
        </SplideTrack>
      </Splide>
    </>
  );
}


function SlidePage({ title, products, backgroundImageCategoryUrl, interval, countdownFlag }: interfaceSlide, key: string) {
  let style = {
    backgroundImage: backgroundImageCategoryUrl ? `url('${backgroundImageCategoryUrl}')` : '',
  }

  return (
    <div className={styles.page} style={style} key={key}>
      <div>
        <h1>{title.toLocaleUpperCase()}</h1>
        <TimerBar interval={interval} countdownFlag={countdownFlag} />
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


interface interfacaceTimerBar {
  countdownFlag?: boolean,
  interval: number
}

function TimerBar({ countdownFlag, interval }: interfacaceTimerBar) {

  const [style, setStyle] = useState({});

  useEffect(() => countdownFlag ? setStyle(() => ({ width: '100vw', transition: 'all 0s' }))
    : setStyle(() => ({ width: 0, transition: `all ${interval / 1000}s linear` }))
    , [interval, countdownFlag])

  return (
    <div style={style} className={[styles.timeBar, styles.timeBarActive].join(' ')}></div>
  )
}

export default Slider;