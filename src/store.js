import { createStore } from 'redux';
import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
/* eslint-env browser */
export default function () {
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
/* eslint-enable no-underscore-dangle */
