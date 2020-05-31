import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container } from '@material-ui/core'

const items: Item[] = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    src: 'https://englishlightnovels.files.wordpress.com/2017/06/miku-banner.jpg'
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    src: 'https://www.wallpaperup.com/uploads/wallpapers/2016/05/08/946495/3e0203663e6778112711e5f930dec028-700.jpg'
  }
]
const Hero = () => {
  return (
    <Carousel>
      {items.map(item => <Item item={item} />)}
    </Carousel>
  )
}
export default Hero

type ItemProps = {
  item: Item
}
type Item = {
  name: string
  description: string
  src: string
}
const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Paper style={{ padding: '16px 40px'}}>
      <Container maxWidth='md'>
        <img style={{ width: '100%' }} src={item.src} alt={item.name} />
        <h2 style={{ marginTop: 0 }}>{item.name}</h2>
        <p>{item.description}</p>

        <Button className="CheckButton">
          Check it out!
        </Button>
      </Container>
    </Paper>
  )
}