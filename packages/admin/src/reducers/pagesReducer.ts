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
  requestPages,
  receivePages,

  receiveCreatePage,
  requestCreatePage,

  receiveUpdatePage,
  requestUpdatePage,

  receiveDeletePage,
  requestDeletePage,
} from '../actions/pagesActions';

/*!
 * Expo
 */

const pagesReducer = createReducer({
  // Get pages list
  [requestPages]: (state: IReducerState) => ({ ...state, loading: true }),
  [receivePages]: (state: IReducerState, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // Create page
  [requestCreatePage]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveCreatePage]: (state: IReducerState, payload) => ({
    data: [...state.data, payload],
    loading: false,
  }),

  // Update page
  [requestUpdatePage]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveUpdatePage]: (state: IReducerState, payload) => {
    const data = state.data.map((item) => {
      if (item._id === payload._id) {
        return { ...item, ...payload };
      }

      return item;
    });

    return {
      data,
      loading: false,
    };
  },
  
  // Delete page
  [requestDeletePage]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveDeletePage]: (state: IReducerState, payload) => {
    const data = state.data.filter(item => item._id !== payload._id);

    return {
      data,
      loading: false,
    };
  },
}, initialState);

export default pagesReducer as any;
