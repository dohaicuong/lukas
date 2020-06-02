import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Tabs, Tab } from '@material-ui/core'
import SearchField from 'components/SearchField'

const Navbar = () => {
  const classes = useStyles()

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => setValue(newValue)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Luka's Owl Garden
          </Typography>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Male" id='tab-0' />
            <Tab label="Female" id='tab-1' />
            <Tab label="Children" id='tab-2' />
          </Tabs>
          <div className={classes.searchBox}>
            <SearchField /> 
          </div>
        </Toolbar>
      </AppBar>
    </div>

  )
}
export default Navbar

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `2px solid ${theme.palette.secondary.dark}`
  },
  title: {
    flexGrow: 1,
  },
  searchBox: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))