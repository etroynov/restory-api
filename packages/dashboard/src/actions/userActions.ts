/*!
 * Vendor
 */

import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToket';
import { createAction } from 'redux-act';

import { error } from './../utils/modals';

/**
 * FETCH USER
 */

export const requestLoginUser: any = createAction('REQUEST_USER');
export const receiveLoginUser: any = createAction('RECEIVE_USER');

export const login = data => (dispatch) => {
  dispatch(requestLoginUser());

  return axios.post(
    'http://api.ucavtor.ru/users/login',
    data,
  ).then(
    ({ data }) => {
      dispatch(receiveLoginUser());
      const { token } = data;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      location.pathname = '/';
    },
    err => error(),
  );
};

/**
 * FETCH USER INFO
 */

export const requestUserInfo: any = createAction('REQUEST_USER_INFO');
export const receiveUserInfo: any = createAction('RECEIVE_USER_INFO');

export const fetchUserInfo = id => (dispatch) => {
  dispatch(requestUserInfo());

  return axios.get(
    `http://api.ucavtor.ru/users/info/${id}`,
  ).then(
    ({ data }) => dispatch(receiveUserInfo(data)),
    err => error(),
  );
};
