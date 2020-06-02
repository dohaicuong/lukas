import React from 'react'
import { Container, Grid, Button, makeStyles } from '@material-ui/core'

const Ensure = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button className={classes.btn} color='primary' variant='contained' fullWidth>
            Doi tra
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.btn} color='primary' variant='contained' fullWidth>
            Bao hanh
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.btn} color='primary' variant='contained' fullWidth>
            Shipping fee
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Ensure

const useStyles = makeStyles(theme => ({
  btn: {
    height: theme.spacing(10)
  }
}))