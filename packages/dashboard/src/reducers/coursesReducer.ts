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
  requestCourses,
  receiveCourses,
} from '../actions/coursesActions';

/*!
 * Expo
 */

const coursesReducer = createReducer({
  // fetch courses
  [requestCourses]: (state: IReducerState) => ({ ...state, loading: true }),
  [receiveCourses]: (state: IReducerState, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),
}, initialState);

export default coursesReducer as any;
