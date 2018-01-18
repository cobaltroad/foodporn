import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Card, Grid, Header } from 'semantic-ui-react'

import { history } from './_helpers';
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

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={8}>
            <Card>
              <Card.Content>
                <Card.Header>
                  Hello World!
                </Card.Header>
                <Card.Description>
                  The template in App.jsx will be the container for all routes.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header>Another Column</Header>
            <span>And this one just uses a basic Header and span</span>
          </Grid.Column>
        </Grid>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" component={LoginPage} />
          </div>
        </Router>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);
