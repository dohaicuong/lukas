import React from 'react'
import { Container, Grid, Paper, CardActionArea } from '@material-ui/core'
import smallBanner from 'resources/banner-small.png'

const ItemList = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        {Array(2).fill(1).map((_, index) => (
          <Grid key={index} item xs={6}>
            <Paper>
              <CardActionArea>
                <img
                  style={{ width: '100%' }}
                  src={smallBanner}
                  alt='Lukas'
                />
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
export default ItemList