import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getData } from './actions'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'

import './App.css'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const persistedState = localStorage.getItem('reduxState') ? 
	JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

store.dispatch(getData())

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
