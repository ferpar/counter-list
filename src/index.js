import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App.js'
import rootReducer from './reducers'
import './styles.css'

ReactDOM.render(
  <Provider 
    store={
      createStore(
        rootReducer,
        composeWithDevTools()
      )
    }>
    <App/>
  </Provider>
  , document.getElementById('app'))
