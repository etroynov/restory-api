/**
 * Dependencies
 */

import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { receiveLoginUser } from './actions/userActions';

import { decode } from 'jsonwebtoken';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import setAuthorizationToken from './utils/setAuthorizationToket';

/**
 * Styles
 */

import './assets/css/antd.min.css';
import './assets/styl/index.styl';

/**
 * Root Component
 */

import App from './App';

/**
 * Store settings
 */

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    ),
  ),
);

/**
 * Auth Settings
 */

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(receiveLoginUser(decode(localStorage.jwtToken)));
}


/**
 * Expo
 */

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
