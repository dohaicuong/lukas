import React from 'react'
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainLayout from 'layouts/main'
import { useWindowScrollPosition } from 'the-platform'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3a3a3c'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': { width: 4, height: 4 },
      },
    },
  },
})

const App = () => {
  // const { y } = useWindowScrollPosition()
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     localStorage.setItem('Y_POSITION', String(y))
  //   }, 1000)
  // }, [y])
  // React.useEffect(() => {
  //   const yPosition = localStorage.getItem('Y_POSITION')
  //   const y = parseInt(yPosition ? yPosition : '0')
  //   setTimeout(() => {
  //     window.scrollTo(0, y)
  //   }, 1000)
  // }, [])

  return (
    <BrowserRouter basename='/lukas'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <React.Suspense fallback={null}>
            <Switch>
              <Route exact path='/' component={React.lazy(() => import('pages/Home'))} />
            </Switch>
          </React.Suspense>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default App