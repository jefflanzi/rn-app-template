const INITIAL_STATE = {
  isLoggedIn: false,
  user: {},
  users: [],
};

// Action Constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true, user: action.payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: null };
    case REGISTER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
}
