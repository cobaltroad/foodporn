import React from 'react';
import { Router, Route, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';
import { Rail, Container, Segment, Menu, Icon, Input, Dropdown } from 'semantic-ui-react';

import { history } from './_helpers';
import { LeftMenu } from './LeftMenu';
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
    const style = { marginLeft: '210' };
    return (
      <div>
        <div style={style}>
          <Menu attached='top'>
            <Dropdown item icon='wrench' simple>
              <Dropdown.Menu>
                <Dropdown.Header>Dropdown Header 1</Dropdown.Header>
                <Dropdown.Item>Item</Dropdown.Item>
                <Dropdown.Item>
                  <Icon name='dropdown' />
                  <span className='text'>Nested Menu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>Subitem 1</Dropdown.Item>
                    <Dropdown.Item>Subitem 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          <Segment attached='bottom'>
            <Router history={history}>
              <div>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/login" component={LoginPage} />
              </div>
            </Router>
          </Segment>
        </div>

      <LeftMenu />
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
