import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Sidebar, Segment, Menu, Icon, Header } from 'semantic-ui-react';

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
    let visible = true;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='dashboard'>
              <Icon name='home' />
              Home
            </Menu.Item>
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
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);
