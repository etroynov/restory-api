/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Init state
 */

const initialState: IReducerState = {
  loading: false,
  data: [],
};

/*!
 * Actions
 */

import {
  requestUsers,
  receiveUsers,

  receiveCreateUser,
  requestCreateUser,

  receiveUpdateUser,
  requestUpdateUser,

  receiveDeleteUser,
  requestDeleteUser,
} from '../actions/usersActions';

/*!
 * Expo
 */

const usersReducer = createReducer({
  // Get users list
  [requestUsers]: (state: IReducerState) => ({ ...state, loading: true }),
  [receiveUsers]: (state: IReducerState, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // Create user
  [requestCreateUser]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveCreateUser]: (state: IReducerState, payload) => ({
    data: [...state.data, payload],
    loading: false,
  }),

  // Update user
  [requestUpdateUser]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveUpdateUser]: (state: IReducerState, payload) => {
    const data = state.data.map((item) => {
      if (item._id === payload.user._id) {
        return { ...item, ...payload };
      }

      return item;
    });

    return {
      data,
      loading: false,
    };
  },
  
  // Delete user
  [requestDeleteUser]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveDeleteUser]: (state: IReducerState, payload) => {
    const data = state.data.filter(item => item._id !== payload.user._id);

    return {
      data,
      loading: false,
    };
  },
}, initialState);

export default usersReducer as any;
