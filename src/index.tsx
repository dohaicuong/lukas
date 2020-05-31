import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'App'
import * as serviceWorker from 'serviceWorker'

const root = document.getElementById('root') as HTMLElement
ReactDOM.unstable_createRoot(root).render(<App />)
serviceWorker.register()
