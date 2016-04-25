import { createStore, applyMiddleware, compose } from 'redux'
//import { persistState } from 'redux-devtools'
import { createHistory } from 'history'
//import { logger } from 'middleware'
import promise from 'redux-promise'
import rootReducer from '../reducers'

export default function configureStore(initialState) {

  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

    
  const createStoreWithMiddleware = applyMiddleware(
    promise
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
