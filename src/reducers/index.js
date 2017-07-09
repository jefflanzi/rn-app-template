import { combineReducers } from 'redux';
import user from './userReducer';
import auth from './authReducer';
import spinner from './spinnerReducer';

export default combineReducers({ auth, user, spinner });
