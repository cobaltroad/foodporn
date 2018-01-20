import React from 'react';
import { Router, Route, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';
import { Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react';

import { history } from './_helpers';
import { authenticationActions } from './_actions';
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

    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(authenticationActions.logout());
  }

  render() {
    let visible = true;
    const { loggedIn } = this.props.authentication;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='dashboard' as='a' href='/'>
              <Icon name='dashboard' />
              Dashboard
            </Menu.Item>
            {loggedIn && <div>
              <Menu.Item name='sign out' onClick={this.onClickLogout}>
                <Icon name='sign out' />
                Log Out
              </Menu.Item>
            </div>}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Router history={history}>
                <div>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/login" component={LoginPage} />
                </div>
              </Router>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { authentication } = state;
  return {
    authentication
  };
}

export default connect(mapStateToProps)(App);
