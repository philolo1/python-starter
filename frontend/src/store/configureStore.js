import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { devTools, persistState as devState } from 'redux-devtools';

var _ = require('lodash');

import rootReducer from '../reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  // devTools(),
  // devState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
