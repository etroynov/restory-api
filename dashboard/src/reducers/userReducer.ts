/*!
 * Vendor
 */

import { isEmpty } from 'lodash';
import { createReducer } from 'redux-act';

/*!
 * Init state
 */

const initialState: IUserReducerState = {
  user: {
    courses: [],
  },
  loading: false,
  isAuthenticated: false,
};

/*!
 * Actions
 */

import {
  requestLoginUser,
  receiveLoginUser,

  requestUserInfo,
  receiveUserInfo,
} from '../actions/userActions';

/*!
 * Expo
 */

const usersReducer = createReducer({
  // login user
  [requestLoginUser]: (state: IUserReducerState) => ({ ...state, loading: true }),
  [receiveLoginUser]: (state: IUserReducerState, payload) => ({
    ...state,
    ...payload,
    isAuthenticated: !isEmpty(payload),
  }),

  // fetch user info
  [requestUserInfo]: (state: IUserReducerState) => ({ ...state, loading: true }),
  [receiveUserInfo]: (state: IUserReducerState, payload) => ({
    ...state,
    ...payload,
    loading: false,
  }), 
}, initialState);

export default usersReducer as any;
