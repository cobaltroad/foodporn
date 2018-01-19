import { authenticationConstants } from '../_constants';
import { authenticationService } from '../_services';
import { history } from '../_helpers';

export const authenticationActions = {
  login,
  logout
}

function login(username, password) {
  return dispatch => {
    dispatch(_request({ username }));

    authenticationService.login(username, password)
      .then(
        user => {
          dispatch(_success(user));
          history.push('/');
        },
        error => {
          dispatch(_failure(error));
        }
      );
  }

  function _request(user) {
    return { type: authenticationConstants.LOGIN_REQUEST, user }
  }
  function _success(user) {
    return { type: authenticationConstants.LOGIN_SUCCESS, user }
  }
  function _failure(error) {
    return { type: authenticationConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  history.push('/login');
  authenticationService.logout();
  return { type: authenticationConstants.LOGOUT };
}
