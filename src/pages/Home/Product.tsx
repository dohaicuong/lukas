import React from 'react'
import { Container, Grid, Paper, CardActionArea, Typography, Divider } from '@material-ui/core'

import product1 from 'resources/product1.png'

const ItemList = () => {
  return (
    <Container maxWidth='lg'>
      <Section id='tshirt' title='ÁO THUN' />
      <Section id='tote' title='TÚI TOTE' />
      <Section id='cover' title='ỐP LƯNG' />
      <Section id='others' title='KHÁC'  />
    </Container>
  )
}
export default ItemList

const Section = ({ title, id }: any) => {
  return (
    <div id={id} style={{ marginTop: 32 }}>
      <Typography variant='h5' gutterBottom>
        {title}
      </Typography>
      <Divider style={{ marginBottom: 16 }} />
      <Grid container spacing={2}>
        {Array(4).fill(1).map((_, index) => (
          <Grid key={index} item xs={3}>
            <Paper>
              <CardActionArea>
                <img
                  style={{ width: '100%' }}
                  src={product1}
                  alt='Lukas'
                />
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}