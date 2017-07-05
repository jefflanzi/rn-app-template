import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { auth } from './middleware';

/* eslint-disable no-underscore-dangle */
/* eslint-env browser */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function () {
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk, auth)));
}
/* eslint-enable no-underscore-dangle */
