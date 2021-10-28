import React from 'react'
import ReactDOM from 'react-dom'

import { CssBaseline } from '@material-ui/core'

import App from './app.jsx'

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById('root')
)
