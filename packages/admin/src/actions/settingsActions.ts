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
 * LIST SETTINGS
 */


export const requestSettings: any = createAction('REQUEST_SETTINGS');
export const receiveSettings: any = createAction('RECEIVE_SETTINGS');


export const fetchSettings = () => (dispatch) => {
  dispatch(requestSettings());

  return axios.get(
    'http://api.ucavtor.ru/settings',
  ).then(
    ({ data }) => dispatch(receiveSettings(data)),
    err => error(),
  );
};

/**
 * CREATE SETTINGS
 */

export const requestCreateSettings: any = createAction('REQUEST_CREATE_SETTINGS');
export const receiveCreateSettings: any = createAction('RECEIVE_CREATE_SETTINGS');

export const createSettings = data => (dispatch) => {
  dispatch(requestCreateSettings());

  return axios.post(
    'http://api.ucavtor.ru/settings/create',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreateSettings(data)),
    err => error(),
  );
};

/**
 * UPDATE SETTINGS
 */

export const requestUpdateSettings: any = createAction('REQUEST_UPDATE_SETTINGS');
export const receiveUpdateSettings: any = createAction('RECEIVE_UPDATE_SETTINGS');

export const updateSettings = data => (dispatch) => {
  dispatch(requestUpdateSettings());

  return axios.post(
    'http://api.ucavtor.ru/settings/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdateSettings(data)),
    err => error(),
  );
};

/**
 * DELETE SETTINGS
 */

export const requestDeleteSettings: any = createAction('REQUEST_DELETE_SETTINGS');
export const receiveDeleteSettings: any = createAction('RECEIVE_DELETE_SETTINGS');

export const deleteSettings = data => (dispatch) => {
  dispatch(requestDeleteSettings());

  return axios.post(
    'http://api.ucavtor.ru/settings/delete',
    data,
  ).then(
    ({ data }) => dispatch(receiveDeleteSettings(data)),
    err => error(),
  );
};

