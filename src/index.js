import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import prmiseMiddleware from 'redux-promise'
import Routes from './routes'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(prmiseMiddleware)(createStore)

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
