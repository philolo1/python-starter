import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import history from './router/history';
import App from './components/App';
import store from './store/store';

import HomePage from './components/pages/HomePage';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
	        <IndexRoute component={HomePage} />
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
