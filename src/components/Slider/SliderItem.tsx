import React from 'react'
import { Paper, Container } from '@material-ui/core'

export type Item = {
  name: string
  description: string
  src: string
}
export type SliderItemProps = {
  item: Item
}
const SliderItem: React.FC<SliderItemProps> = ({ item }) => {
  return (
    <Paper style={{ padding: '16px 40px'}}>
      <Container maxWidth='md'>
        <img style={{ width: '100%' }} src={item.src} alt={item.name} />
        <h2 style={{ marginTop: 0 }}>{item.name}</h2>
        <p>{item.description}</p>
      </Container>
    </Paper>
  )
}
export default SliderItem