import React from 'react'
import { Grid, Container, makeStyles, Typography } from '@material-ui/core'
import logo from 'resources/logo.png'

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={6} container>
            <Grid item>
              <img height={200} width={200} src={logo} alt='Lukas' />
            </Grid>
            <Grid item xs style={{ padding: 16 }}>
              <Typography variant='body1'>
                Lukas. Co
              </Typography>
              <Typography variant='body1'>
                Address: 64/21 Nguyen Khoai St, Ward 2, Distrist 4, HCM City
              </Typography>
              <Typography variant='body1'>
                Tel: (033)7 828 172
              </Typography>
              <Typography variant='body1'>
                Mail: owlgarden2310@gmail.com
              </Typography>
              <Typography variant='body1'>
                Website: lukasowlgarden.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default Footer

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}))