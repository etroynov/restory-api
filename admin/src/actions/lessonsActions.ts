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
 * FETCH LESSONS
 */


export const requestLessons: any = createAction('REQUEST_LESSONS');
export const receiveLessons: any = createAction('RECEIVE_LESSONS');


export const fetchLessons = () => (dispatch) => {
  dispatch(requestLessons());

  return axios.get(
    'http://api.ucavtor.ru/lessons',
  ).then(
    ({ data }) => dispatch(receiveLessons(data)),
    err => error(),
  );
};

/**
 * FETCH LESSON
 */

export const requestLesson: any = createAction('REQUEST_LESSON');
export const receiveLesson: any = createAction('RECEIVE_LESSON');

export const fetchLesson = data => (dispatch) => {
  dispatch(requestLesson());

  return axios.get(
    `http://api.ucavtor.ru/lessons/${data}`,
  ).then(
    ({ data }) => dispatch(receiveLesson(data)),
    err => error(),
  );
};

/**
 * CREATE LESSON
 */

export const requestCreateLesson: any = createAction('REQUEST_CREATE_LESSON');
export const receiveCreateLesson: any = createAction('RECEIVE_CREATE_LESSON');

export const createLesson = data => (dispatch) => {
  dispatch(requestCreateLesson());

  return axios.post(
    'http://api.ucavtor.ru/lessons/create',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreateLesson(data)),
    err => error(),
  );
};

/**
 * UPDATE LESSON
 */

export const requestUpdateLesson: any = createAction('REQUEST_UPDATE_LESSON');
export const receiveUpdateLesson: any = createAction('RECEIVE_UPDATE_LESSON');

export const updateLesson = data => (dispatch) => {
  dispatch(requestUpdateLesson());

  return axios.post(
    'http://api.ucavtor.ru/lessons/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdateLesson(data)),
    err => error(),
  );
};

/**
 * DELETE LESSON
 */

export const requestDeleteLesson: any = createAction('REQUEST_DELETE_LESSON');
export const receiveDeleteLesson: any = createAction('RECEIVE_DELETE_LESSON');

export const deleteLesson = data => (dispatch) => {
  dispatch(requestDeleteLesson());

  return axios.post(
    'http://api.ucavtor.ru/lessons/delete',
    data,
  ).then(
    () => dispatch(receiveDeleteLesson(data)),
    err => error(),
  );
};

