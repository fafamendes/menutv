import React, { useCallback, useEffect, useState } from 'react'
import styles from './Slider.module.css'

interface SliderProps {
  data?: any,
  delay?: number
}

const { innerWidth: width, innerHeight: height } = window;

function Slider({ data = [], delay = 1000 }: SliderProps) {

  const [idTimeout, setIdTimeout] = useState<NodeJS.Timeout>();
  const [atualSlide, setAtualSlide] = useState(1000)
  const [contentView, setContentView] = useState<React.ReactElement[]>([])

  let dataLength = data.length

  const drawCarousel = useCallback(() => {
    let elements: React.ReactElement[] = []

    elements.push(<SliderPage key={0} content={data[0]} />)

    setContentView(elements);
  }, [setContentView, data])

  function next() {
    let newSliderContentView: React.ReactElement[] = contentView;

    console.log(width)

    if (idTimeout) {
      clearTimeout(idTimeout);
    }

    let EsliderContent = Array.from(document.getElementsByClassName(styles.sliderContent) as HTMLCollectionOf<HTMLElement>)[0]
    newSliderContentView.push(<SliderPage key={`${Math.random()}-atualSlide + 1`} content={data[(atualSlide + 1) % dataLength]} />)
    setContentView(newSliderContentView)
    EsliderContent.style.setProperty('left', `-${width}px`)

    let id = setTimeout(() => {
      setContentView(newSliderContentView.slice(newSliderContentView.length - 1))
      EsliderContent.style.setProperty('transition', `none`)
      EsliderContent.style.setProperty('left', `0px`)
      setTimeout(() => EsliderContent.style.setProperty('transition', '1s all'), 1000)

    }, 1000);
    setIdTimeout(id);
    setAtualSlide(atualSlide + 1)
    console.log(contentView, atualSlide, data[(atualSlide + 1) % dataLength], idTimeout)
  }

  const prev = () => {
    let EsliderContent = Array.from(document.getElementsByClassName(styles.sliderContent) as HTMLCollectionOf<HTMLElement>)[0]
    EsliderContent.style.setProperty('left', `0px`)
    setAtualSlide(atualSlide - 1)
  }

  const init = useCallback(() => {
    setAtualSlide(atualSlide + (dataLength / 2))
  }, [setAtualSlide, atualSlide, dataLength]);

  useEffect(() => init(), [])

  useEffect(() => {
    drawCarousel();
  }, [drawCarousel])

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