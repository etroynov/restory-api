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
 * LIST PAGE
 */


export const requestPages: any = createAction('REQUEST_PAGES');
export const receivePages: any = createAction('RECEIVE_PAGES');


export const fetchPages = () => (dispatch) => {
  dispatch(requestPages());

  return axios.get(
    'http://api.ucavtor.ru/pages',
  ).then(
    ({ data }) => dispatch(receivePages(data)),
    err => error(),
  );
};

/**
 * CREATE PAGE
 */

export const requestCreatePage: any = createAction('REQUEST_CREATE_PAGE');
export const receiveCreatePage: any = createAction('RECEIVE_CREATE_PAGE');

export const createPage = data => (dispatch) => {
  dispatch(requestCreatePage());

  return axios.post(
    'http://api.ucavtor.ru/pages/create',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreatePage(data)),
    err => error(),
  );
};

/**
 * UPDATE PAGE
 */

export const requestUpdatePage: any = createAction('REQUEST_UPDATE_PAGE');
export const receiveUpdatePage: any = createAction('RECEIVE_UPDATE_PAGE');

export const updatePage = data => (dispatch) => {
  dispatch(requestUpdatePage());

  return axios.post(
    'http://api.ucavtor.ru/pages/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdatePage(data)),
    err => error(),
  );
};

/**
 * DELETE PAGE
 */

export const requestDeletePage: any = createAction('REQUEST_DELETE_PAGE');
export const receiveDeletePage: any = createAction('RECEIVE_DELETE_PAGE');

export const deletePage = data => (dispatch) => {
  dispatch(requestDeletePage());

  return axios.post(
    'http://api.ucavtor.ru/pages/delete',
    data,
  ).then(
    ({ data }) => dispatch(receiveDeletePage(data)),
    err => error(),
  );
};

