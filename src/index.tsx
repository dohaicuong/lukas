import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'

const theme = createMuiTheme()

const root = document.getElementById('root') as HTMLElement
ReactDOM.unstable_createRoot(root).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
serviceWorker.register()
