// React basics
import React from 'react'
import { createRoot } from 'react-dom/client'

// Theme and Styling Basics
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Bring in our theme and main app components
import customTheme from './theme.js'
import App from './app.jsx'

// Enable live reloading of browser in _DEV_ mode using ESBuild
if (_DEV_) {
  new EventSource('/esbuild').addEventListener('change', () => location.reload())
}

// Render the basic app into the ROOT div
const container = document.getElementById('root')
const reactRoot = createRoot(container)
reactRoot.render(
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.Fragment>
)
