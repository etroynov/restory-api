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
 * FETCH QUESTIONS
 */


export const requestQuestions: any = createAction('REQUEST_QUESTIONS');
export const receiveQuestions: any = createAction('RECEIVE_QUESTIONS');


export const fetchQuestions = () => (dispatch) => {
  dispatch(requestQuestions());

  return axios.get(
    'http://api.ucavtor.ru/questions',
  ).then(
    ({ data }) => dispatch(receiveQuestions(data)),
    err => error(),
  );
};

/**
 * FETCH QUESTION
 */

export const requestQuestion: any = createAction('REQUEST_QUESTION');
export const receiveQuestion: any = createAction('RECEIVE_QUESTION');

export const fetchQuestion = data => (dispatch) => {
  dispatch(requestQuestion());

  return axios.get(
    `http://api.ucavtor.ru/questions/${data}`,
  ).then(
    ({ data }) => dispatch(receiveQuestion(data)),
    err => error(),
  );
};

/**
 * CREATE QUESTION
 */

export const requestCreateQuestion: any = createAction('REQUEST_CREATE_QUESTION');
export const receiveCreateQuestion: any = createAction('RECEIVE_CREATE_QUESTION');

export const createQuestion = data => (dispatch) => {
  dispatch(requestCreateQuestion());

  return axios.post(
    'http://api.ucavtor.ru/questions/create',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreateQuestion(data)),
    err => error(),
  );
};

/**
 * UPDATE QUESTION
 */

export const requestUpdateQuestion: any = createAction('REQUEST_UPDATE_QUESTION');
export const receiveUpdateQuestion: any = createAction('RECEIVE_UPDATE_QUESTION');

export const updateQuestion = data => (dispatch) => {
  dispatch(requestUpdateQuestion());

  return axios.post(
    'http://api.ucavtor.ru/questions/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdateQuestion(data)),
    err => error(),
  );
};

/**
 * DELETE QUESTION
 */

export const requestDeleteQuestion: any = createAction('REQUEST_DELETE_QUESTION');
export const receiveDeleteQuestion: any = createAction('RECEIVE_DELETE_QUESTION');

export const deleteQuestion = data => (dispatch) => {
  dispatch(requestDeleteQuestion());

  return axios.post(
    'http://api.ucavtor.ru/questions/delete',
    data,
  ).then(
    () => dispatch(receiveDeleteQuestion(data)),
    err => error(),
  );
};
