/*!
 * Vendor
 */

import axios from 'axios';
import { createAction } from 'redux-act';

/*!
 * Utils
 */

import { error } from './../utils/modals';


/*!
 * Expo
 */

/**
 * LIST Post
 */


export const requestPosts: any = createAction('REQUEST_POSTS');
export const receivePosts: any = createAction('RECEIVE_POSTS');


export const fetchPosts = () => (dispatch) => {
  dispatch(requestPosts());

  return axios.get(
    'http://api.ucavtor.ru/posts',
  ).then(
    ({ data }) => dispatch(receivePosts(data)),
    err => error(),
  );
};

/**
 * CREATE POST
 */

export const requestCreatePost: any = createAction('REQUEST_CREATE_POST');
export const receiveCreatePost: any = createAction('RECEIVE_CREATE_POST');

export const createPost = data => (dispatch) => {
  dispatch(requestCreatePost());

  return axios.post(
    'http://api.ucavtor.ru/posts/create',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreatePost(data)),
    err => error(),
  );
};

/**
 * UPDATE POST
 */

export const requestUpdatePost: any = createAction('REQUEST_UPDATE_POSTS');
export const receiveUpdatePost: any = createAction('RECEIVE_UPDATE_POSTS');

export const updatePost = data => (dispatch) => {
  dispatch(requestUpdatePost());

  return axios.post(
    'http://api.ucavtor.ru/posts/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdatePost(data)),
    err => error(),
  );
};

/**
 * DELETE POST
 */

export const requestDeletePost: any = createAction('REQUEST_DELETE_POST');
export const receiveDeletePost: any = createAction('RECEIVE_DELETE_POST');

export const deletePost = data => (dispatch) => {
  dispatch(requestDeletePost());

  return axios.post(
    'http://api.ucavtor.ru/posts/delete',
    data,
  ).then(
    ({ data }) => dispatch(receiveDeletePost(data)),
    err => error(),
  );
};

