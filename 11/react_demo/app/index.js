console.log('react!!!')

import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/Slider'
import PasswordInput from './components/PasswordInput'
import App from './components/App'

ReactDOM.render (
  // <Slider startValue="3" min="0" max="20"/>,
  <App />,
  document.querySelector("#root")
)
