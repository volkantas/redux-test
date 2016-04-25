import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
//import DevTools from './containers/DevTools/DevTools'
import routes from './routes.js'

import configure from './store/configureStore'

const store = configure({})
const history = syncHistoryWithStore(browserHistory, store)


const component = (
  <Provider store={store}>
   <Router history={history}>
     {routes}
   </Router>
 </Provider>
)

ReactDOM.render(
  component,
  document.getElementById('root')
)
