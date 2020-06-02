import React from 'react'
import { Grid, Container, makeStyles } from '@material-ui/core'

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={6}>
            Logo
          </Grid>
          <Grid item xs={3}>
            Lien he
          </Grid>
          <Grid item xs={3}>
            Facebook
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default Footer

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.grey['800'],
    color: theme.palette.primary.contrastText
  }
}))