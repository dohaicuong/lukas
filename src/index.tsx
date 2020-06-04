import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'

import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainLayout from 'layouts/main'

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

const root = document.getElementById('root') as HTMLElement
ReactDOM.unstable_createRoot(root).render(
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
serviceWorker.unregister()
