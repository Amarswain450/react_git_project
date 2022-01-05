import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import theme from './theme'



const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
