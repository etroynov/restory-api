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
  requestSettings,
  receiveSettings,

  receiveCreateSettings,
  requestCreateSettings,

  receiveUpdateSettings,
  requestUpdateSettings,

  receiveDeleteSettings,
  requestDeleteSettings,
} from '../actions/settingsActions';

/*!
 * Expo
 */

const settingsReducer = createReducer({
  // Get settings list
  [requestSettings]: (state: IReducerState) => ({ ...state, loading: true }),
  [receiveSettings]: (state: IReducerState, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // Create settings
  [requestCreateSettings]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveCreateSettings]: (state: IReducerState, payload) => ({
    data: [...state.data, payload],
    loading: false,
  }),

  // Update settings
  [requestUpdateSettings]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveUpdateSettings]: (state: IReducerState, payload) => {
    const data = state.data.map((item) => {
      if (item._id === payload.settings._id) {
        return { ...item, ...payload };
      }

      return item;
    });

    return {
      data,
      loading: false,
    };
  },
  
  // Delete settings
  [requestDeleteSettings]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveDeleteSettings]: (state: IReducerState, payload) => {
    const data = state.data.filter(item => item._id !== payload._id);

    return {
      data,
      loading: false,
    };
  },
}, initialState);

export default settingsReducer as any;
