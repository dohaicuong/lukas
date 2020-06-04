import React from 'react'
import Carousel from 'react-material-ui-carousel'
import SliderItem, { Item } from './SliderItem'

export type SliderProps = {
  items: Item[]
}
const Slider: React.FC<SliderProps> = ({ items }) => {
  return (
    <Carousel>
      {items.map(item => <SliderItem key={item.name} item={item} />)}
    </Carousel>
  )
}
export default Slider