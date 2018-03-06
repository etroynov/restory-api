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
 * LIST SECTION
 */


export const requestSections: any = createAction('REQUEST_SECTIONS');
export const receiveSections: any = createAction('RECEIVE_SECTIONS');


export const fetchSections = () => (dispatch) => {
  dispatch(requestSections());

  return axios.get(
    'http://api.ucavtor.ru/sections',
  ).then(
    ({ data }) => dispatch(receiveSections(data)),
    err => error(),
  );
};

/**
 * CREATE SECTION
 */

export const requestCreateSection: any = createAction('REQUEST_CREATE_SECTION');
export const receiveCreateSection: any = createAction('RECEIVE_CREATE_SECTION');

export const createSection = data => (dispatch) => {
  dispatch(requestCreateSection());

  return axios.post(
    'http://api.ucavtor.ru/sections/create',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreateSection(data)),
    err => error(),
  );
};

/**
 * UPDATE SECTION
 */

export const requestUpdateSection: any = createAction('REQUEST_UPDATE_SECTION');
export const receiveUpdateSection: any = createAction('RECEIVE_UPDATE_SECTION');

export const updateSection = data => (dispatch) => {
  dispatch(requestUpdateSection());

  return axios.post(
    'http://api.ucavtor.ru/sections/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdateSection(data)),
    err => error(),
  );
};

/**
 * DELETE SECTION
 */

export const requestDeleteSection: any = createAction('REQUEST_DELETE_SECTION');
export const receiveDeleteSection: any = createAction('RECEIVE_DELETE_SECTION');

export const deleteSection = data => (dispatch) => {
  dispatch(requestDeleteSection());

  return axios.post(
    'http://api.ucavtor.ru/sections/delete',
    data,
  ).then(
    ({ data }) => dispatch(receiveDeleteSection(data)),
    err => error(),
  );
};
