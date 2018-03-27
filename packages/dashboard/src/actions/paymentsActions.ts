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
 * FETCH PAYMENTS
 */

export const requestPayments: any = createAction('REQUEST_PAYMENTS');
export const receivePayments: any = createAction('RECEIVE_PAYMENTS');

export const fetchPayments = () => (dispatch) => {
  dispatch(requestPayments());

  return axios.get(
    'http://api.ucavtor.ru/payments',
  ).then(
    ({ data }) => dispatch(receivePayments(data)),
    err => error(),
  );
};

/**
 * FETCH PAYMENT
 */

export const requestPayment: any = createAction('REQUEST_PAYMENT');
export const receivePayment: any = createAction('RECEIVE_PAYMENT');

export const fetchPayment = data => (dispatch) => {
  dispatch(requestPayment());

  return axios.get(
    `http://api.ucavtor.ru/payments/${data}`,
  ).then(
    ({ data }) => dispatch(receivePayment(data)),
    err => error(),
  );
};


/**
 * UPDATE PAYMENT
 */

export const requestUpdatePayment: any = createAction('REQUEST_UPDATE_PAYMENT');
export const receiveUpdatePayment: any = createAction('RECEIVE_UPDATE_PAYMENT');

export const updatePayment = data => (dispatch) => {
  dispatch(requestUpdatePayment());

  return axios.post(
    'http://api.ucavtor.ru/payments/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdatePayment(data)),
    err => error(),
  );
};


/**
 * CHECK PAYMENTS STATUS
 */

export const requestPaymentStatus: any = createAction('REQUEST_PAYMENTS_STATUS');
export const receivePaymentStatus: any = createAction('RECEIVE_PAYMENTS_STATUS');

export const checkPaymentsStatus = () => (dispatch) => {
  dispatch(requestPaymentStatus());

  return axios.get(
    `http://api.ucavtor.ru/payments/check`,
  ).then(
    ({ data }) => dispatch(receivePaymentStatus(data)),
    err => error(),
  );
};

