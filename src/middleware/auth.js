import uuid from 'uuid/v4';
import { GET_USER, LOGIN, REGISTER } from '../reducers/userReducer';
import { CREATE_USER, UPDATE_USER } from '../reducers/authReducer';

export default ({ dispatch, getState }) => next => (action) => {
  // Get current state from store
  const state = getState();
  const { users } = state.auth;

  switch (action.type) {
    case REGISTER:
      dispatch(createUser(action.payload, users));
      return next(action);
    case LOGIN:
      console.log('login from middleware');
      return next(authenticateUser(action.payload, users));
    default:
      return next(action);
  }
};

// Action creators
function createUser(user, users) {
  const existingUser = findUserByEmail(user.email, users);
  if (existingUser) {
    return {
      type: 'ERROR',
      payload: 'Email is taken',
    };
  }
  return {
    type: CREATE_USER,
    payload: { ...user, id: uuid() },
  };
}

function authenticateUser(user, users) {
  const foundUser = findUserByEmail(user.email, users);
  if (!foundUser) {
    return {
      type: 'USER_NOT_FOUND',
    };
  } else if (!foundUser.password === user.password) {
    return {
      type: 'INVALID_PASSWORD',
    };
  }
  return {
    type: LOGIN,
    payload: foundUser,
  };
}

function findUserByEmail(email, users) {
  return users.find(existing => existing.email === email);
}

function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  };
}

// Helper functions
