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
  requestSections,
  receiveSections,

  receiveCreateSection,
  requestCreateSection,

  receiveUpdateSection,
  requestUpdateSection,
} from '../actions/sectionsActions';

/*!
 * Expo
 */

const sectionsReducer = createReducer(
  {
    // List section
    [requestSections]: (state: IReducerState) => ({ ...state, loading: true }),
    [receiveSections]: (state: IReducerState, payload) => ({
      ...state,
      data: payload,
      loading: false,
    }),

     // Create section
    [requestCreateSection]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveCreateSection]: (state: IReducerState, payload) => ({
      data: [...state.data, payload],
      loading: false,
    }),

     // Update section
    [requestUpdateSection]: (state: IReducerState) => ({
      ...state,
      loading: true,
    }),
    [receiveUpdateSection]: (state: IReducerState, payload) => {
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
  },
  initialState,
);

export default sectionsReducer as any;
