import {
  CREATE_USER,
  UPDATE_USER,
  AUTHENTICATE_USER,
} from '../reducers/authReducer';

export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: user,
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    payload: user,
  };
}
