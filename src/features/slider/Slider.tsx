import React, { useCallback, useEffect, useState } from 'react'
import styles from './Slider.module.css'

interface SliderProps {
  data?: any,
  delay?: number
}

const { innerWidth: width, innerHeight: height } = window;

function Slider({ data = [], delay = 1000 }: SliderProps) {

  const [atualSlide, setAtualSlide] = useState(1000)
  const [contentView, setContentView] = useState<any>([])

  let dataLength = data.length

  const drawCarousel = useCallback(() => {
    let elements: any[] = []

    elements.push(<SliderPage key={atualSlide} content={data[0]} />)

    setContentView(elements);
  }, [setContentView, data, atualSlide, dataLength])

  const next = () => {
    console.log(width)
    let EsliderContent = document.getElementsByClassName(styles.sliderContent)[0]
    setContentView(prevContentView => [...prevContentView, <SliderPage key={atualSlide + 1} content={data[atualSlide + 1]} />])
    EsliderContent.style.setProperty('left', `-${width}px`)
    //EsliderContent.style.setProperty('left', `0`)
    setAtualSlide(atualSlide + 1)

    console.log(contentView)
  }

  const prev = () => {
    console.log(width)
    let EsliderContent = document.getElementsByClassName(styles.sliderContent)[0]
    EsliderContent.style.setProperty('left', `0px`)
    setAtualSlide(atualSlide - 1)
  }

  const init = useCallback(() => {
    setAtualSlide(atualSlide + (dataLength / 2))
  }, [setAtualSlide, atualSlide, dataLength]);

  useEffect(() => init(), [])

  useEffect(() => {
    drawCarousel();
    console.log(atualSlide)
  }, [drawCarousel, atualSlide])

  return (
    <div className='slider'>
      <div className='slider-controls'>
        <button onClick={prev}>&lt;</button>
        <button onClick={next}>&gt;</button>
      </div>
      <div className={styles.sliderContent}>
        {contentView}
      </div>
    </div>
  );
}

interface SliderPageProps {
  title?: string,
  content?: string,
}

function SliderPage({ title, content }: SliderPageProps) {
  return (
    <div style={{ width }} className={styles.sliderPage} >
      <div>{title}</div>
      <div>{content}</div>
    </div >
  )
}

export default Slider;