import React from 'react'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import Main from './containers/Main'
import Detail from './containers/Detail'

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Main} />
      <Route path="detail/:id" component={Detail}/>
    </Route>
  </Router>
)
