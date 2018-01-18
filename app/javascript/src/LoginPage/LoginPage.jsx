import React from 'react';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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

export default connect(mapStateToProps)(LoginPage);
