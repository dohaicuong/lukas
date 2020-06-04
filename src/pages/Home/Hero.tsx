import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import banner1 from 'resources/banner1.png'

const items: Item[] = [
  { src: banner1 },
  { src: banner1 },
  { src: banner1 },
]
const Hero = () => {
  return (
    <Carousel>
      {items.map((item, index) => <Item key={index} item={item} />)}
    </Carousel>
  )
}
export default Hero

type ItemProps = {
  item: Item
}
type Item = {
  src: string
}
const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Paper>
      <img style={{ width: '100%' }} src={item.src} alt='Lukas' />
    </Paper>
  )
}