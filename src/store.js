import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
/* eslint-env browser */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function () {
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
}
/* eslint-enable no-underscore-dangle */
