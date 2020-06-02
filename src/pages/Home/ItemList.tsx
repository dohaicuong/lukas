import React from 'react'
import { Container, Grid, Paper, CardActionArea } from '@material-ui/core'

const ItemList = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        {Array(8).fill(1).map((_, index) => (
          <Grid key={index} item xs={3}>
            <Paper>
              <CardActionArea style={{ padding: 16 }}>
                <img
                  style={{ width: '100%' }}
                  src='https://vignette.wikia.nocookie.net/vocaloid/images/f/f9/Miku_Chinese.png/revision/latest?cb=20191218220041'
                  alt='Miku'
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