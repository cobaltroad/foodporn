import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Input } from 'semantic-ui-react';

import { authenticationActions } from './_actions';

class LeftMenu extends React.Component {
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
    const { loggedIn } = this.props.authentication;
    return (
      <Menu vertical fixed='left' inverted>
        <Menu.Item>
          <strong>Food Porn CMS</strong>
        </Menu.Item>
        <Menu.Item>
          <Input inverted transparent icon='search' placeholder='Search' />
        </Menu.Item>
        <Menu.Item as='a' href='/'>
          <Icon name='dashboard' />
          Dashboard
        </Menu.Item>
        {loggedIn && <div>
          <Menu.Item onClick={this.onClickLogout}>
            <Icon name='sign out' />
            Log Out
          </Menu.Item>
        </div>}
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  return {
    authentication
  };
}

const connectedLeftMenu = connect(mapStateToProps)(LeftMenu);
export { connectedLeftMenu as LeftMenu };
