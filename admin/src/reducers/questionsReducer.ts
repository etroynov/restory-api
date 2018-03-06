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
  requestQuestions,
  receiveQuestions,

  requestQuestion,
  receiveQuestion,

  receiveCreateQuestion,
  requestCreateQuestion,

  receiveUpdateQuestion,
  requestUpdateQuestion,
} from '../actions/questionsActions';

/*!
 * Expo
 */

const questionsReducer = createReducer({
  // FETCH QUESTIONS
  [requestQuestions]: (state: IReducerState) => ({ ...state, loading: true }),
  [receiveQuestions]: (state: IReducerState, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // CREATE QUESTION
  [requestCreateQuestion]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveCreateQuestion]: (state: IReducerState, payload) => ({
    data: [...state.data, payload],
    loading: false,
  }),
}, initialState);

export default questionsReducer as any;
