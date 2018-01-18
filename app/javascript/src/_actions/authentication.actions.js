import { authenticationConstants } from '../_constants';

export const authenticationActions = {
  login,
  logout
}

function login(username, password) {
  return dispatch => {
    dispatch(_request({ username }));

    // do service stuff
  }

  function _request(user) {
    return { type: authenticationConstants.LOGIN_REQUEST, user }
  }
}

function logout() {
  // do service stuff
  return { type: authenticationConstants.LOGOUT };
}
