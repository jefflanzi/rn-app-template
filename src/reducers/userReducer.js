const INITIAL_STATE = {
  isLoggedIn: false,
};

// Action Constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const GET_USER = 'GET_USER';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return { isLoggedIn: true, user: action.payload };
    case LOGOUT:
      return { isLoggedIn: false };
    case GET_USER:
      return { user: action.payload };
    default:
      return state;
  }
}
