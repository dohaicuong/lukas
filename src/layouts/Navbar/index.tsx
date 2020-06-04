import React from 'react'
import { AppBar, Toolbar, makeStyles, Button, IconButton } from '@material-ui/core'
import SearchField from 'components/SearchField'
import { useWindowScrollPosition } from 'the-platform'

import logo from 'resources/logo.png'
import { Link } from 'react-router-dom'
import ProductMenu from './ProductMenu'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import CardTravelIcon from '@material-ui/icons/CardTravel'
import ExtensionIcon from '@material-ui/icons/Extension'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Navbar = () => {
  const { y } = useWindowScrollPosition()
  const isNavbarActive = y < 200

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleProductMenuClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleProductMenuClose = () => setAnchorEl(null)

  return (
    <AppBar position="sticky" elevation={15}>
      <Toolbar className={`${classes.toolbar} ${isNavbarActive ? classes.toolbarActive : ''}`}>
        <Link to='/' style={{ flexGrow: 1 }}>
          <img src={logo} alt='Lukas' />
        </Link>
        <div>
          <Button color='inherit' size='large' className={classes.button}>
            GIỚI THIỆU
          </Button>
          <Button
            color='inherit' size='large'
            onClick={handleProductMenuClick}
            endIcon={Boolean(anchorEl) ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            className={classes.button}
          >
            SẢN PHẨM
          </Button>
          <Button color='inherit' size='large' className={classes.button}>
            Combo KHUYẾN MÃI
          </Button>
        </div>
        <ProductMenu
          anchor={anchorEl}
          handleClose={handleProductMenuClose}
          items={[
            { label: 'ÁO THUN', icon: ColorLensIcon, id: 'tshirt' },
            { label: 'TÚI TOTE', icon: CardTravelIcon, id: 'tote' },
            { label: 'ỐP LƯNG', icon: ExtensionIcon, id: 'cover' },
            { label: 'KHÁC', icon: AssignmentIndIcon, id: 'others' },
          ]}
        />
        <div className={classes.searchBox}>
          <IconButton color='inherit'>
            <ShoppingCartIcon />
          </IconButton>
          <SearchField /> 
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar

const headerTransition = 'all 0.6s ease-in-out'
const headerHeight = 55
const activeHeaderHeight = 120

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
  },

  toolbar: {
    minHeight: headerHeight,
    transition: headerTransition,
    '& > a' : {
      height: headerHeight,
      transition: headerTransition,
      '& > img': {
        height: headerHeight,
        marginRight: theme.spacing(),
        transition: headerTransition,
      },
    },
  },
  toolbarActive: {
    minHeight: activeHeaderHeight,
    transition: headerTransition,
    '& > a' : {
      height: activeHeaderHeight,
      transition: headerTransition,
      '& > img': {
        height: activeHeaderHeight,
        marginRight: theme.spacing(),
        transition: headerTransition,
      },
    },
  },
  button: {
    fontWeight: 700,
    minWidth: 200,
  }
}))