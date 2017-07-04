export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

const INITIAL_STATE = { users: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
}
