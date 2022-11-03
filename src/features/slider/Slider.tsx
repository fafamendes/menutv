import React, { useEffect, useState } from 'react'

interface SliderProps {
  data?: any,
  delay?: number
}

function Slider({ data = [], delay = 1000 }: SliderProps) {

  const [atualSlide, setAtualSlide] = useState(1000)
  const [contentView, setContentView] = useState<any>([])

  let dataLength = data.length

  const drawCarousel = () => {
    let elements: any[] = []
    for (let i = 0; i < 3; i++) {
      elements.push(<div key={`carousel-item-${i}`} >{data[(atualSlide - 1) + i]}</div>)
    }
    setContentView(elements);
  }

  useEffect(() => {

  })

  return (
    <div className='slider'>

    </div>
  );
}

interface SliderPageProps {
  title?: string,
  content?: string,
}

function SliderPage({ title, content }: SliderPageProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  )
}

export default Slider;