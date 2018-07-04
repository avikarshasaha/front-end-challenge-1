import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root
