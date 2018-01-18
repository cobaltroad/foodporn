import React from 'react';
import { connect } from 'react-redux';

import { authenticationActions } from '../_actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(authenticationActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(authenticationActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;

    return(
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <input name="username" placeholder="Username" onChange={this.onChange} type="text" />
          <input name="password" placeholder="Password" onChange={this.onChange} type="password" />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
