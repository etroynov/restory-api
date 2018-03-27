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
  requestPosts,
  receivePosts,

  receiveCreatePost,
  requestCreatePost,

  receiveUpdatePost,
  requestUpdatePost,

  receiveDeletePost,
  requestDeletePost,
} from '../actions/postsActions';

/*!
 * Expo
 */

const postReducer = createReducer({
  // Get posts list
  [requestPosts]: (state: IReducerState) => ({ ...state, loading: true }),
  [receivePosts]: (state: IReducerState, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // Create post
  [requestCreatePost]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveCreatePost]: (state: IReducerState, payload) => ({
    data: [...state.data, payload],
    loading: false,
  }),

  // Update post
  [requestUpdatePost]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveUpdatePost]: (state: IReducerState, payload) => {
    const data = state.data.map((item) => {
      if (item._id === payload.post._id) {
        return { ...item, ...payload };
      }

      return item;
    });

    return {
      data,
      loading: false,
    };
  },
  
  // Delete post
  [requestDeletePost]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveDeletePost]: (state: IReducerState, payload) => {
    const data = state.data.filter(item => item._id !== payload.post._id);

    return {
      data,
      loading: false,
    };
  },
}, initialState);

export default postReducer as any;
