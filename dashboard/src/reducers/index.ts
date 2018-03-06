/*!
 * Vendor
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './coursesReducer';
import user from './userReducer';
import payments from './paymentsReducer';

/*!
 * Expo
 */

export default combineReducers({
  user,
  courses,
  payments,
  routing: routerReducer,
});
