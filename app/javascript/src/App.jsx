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
    return (
      <div>
        <Segment>
          <Container>
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
              <Segment>Test</Segment>
              <Segment>Test</Segment>
              <Segment>Test</Segment>
              <Segment>Test</Segment>
              <Segment>Test</Segment>
              <Router history={history}>
                <div>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/login" component={LoginPage} />
                </div>
              </Router>
            </Segment>
          </Container>
          <LeftMenu />
        </Segment>
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
