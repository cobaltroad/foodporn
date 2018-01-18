import React from 'react';
import { Route, Redirect } from 'react-router';

import { LoginPage } from './LoginPage';
import { Dashboard } from './Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )
  )} />
)

export default (
  <Route>
    <PrivateRoute exact path="/" component={Dashboard} />
    <Route path="/login" component={LoginPage} />
  </Route>
)

