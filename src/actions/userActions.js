import { GET_USER, LOGIN, LOGOUT, REGISTER } from '../reducers/userReducer';

export function login(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function register(user) {
  return {
    type: REGISTER,
    payload: user,
  };
}

export function getUser(userId) {
  return {
    type: GET_USER,
    payload: user,
  };
}
