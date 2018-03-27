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
 * FETCH COURSES
 */


export const requestCourses: any = createAction('REQUEST_COURSES');
export const receiveCourses: any = createAction('RECEIVE_COURSES');


export const fetchCourses = () => (dispatch) => {
  dispatch(requestCourses());

  return axios.get(
    'http://api.ucavtor.ru/courses',
  ).then(
    ({ data }) => dispatch(receiveCourses(data)),
    err => error(),
  );
};

/**
 * FETCH COURSE
 */

export const requestCourse: any = createAction('REQUEST_COURSE');
export const receiveCourse: any = createAction('RECEIVE_COURSE');

export const fetchCourse = data => (dispatch) => {
  dispatch(requestCourse());

  return axios.get(
    `http://api.ucavtor.ru/courses/${data}`,
  ).then(
    ({ data }) => dispatch(receiveCourse(data)),
    err => error(),
  );
};


/**
 * CREATE COURSE
 */

export const requestCreateCourse: any = createAction('REQUEST_CREATE_COURSE');
export const receiveCreateCourse: any = createAction('RECEIVE_CREATE_COURSE');

export const createCourse = data => (dispatch) => {
  dispatch(requestCreateCourse());

  return axios.post(
    'http://api.ucavtor.ru/courses/create',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreateCourse(data)),
    err => error(),
  );
};

/**
 * UPDATE COURSE
 */

export const requestUpdateCourse: any = createAction('REQUEST_UPDATE_COURSE');
export const receiveUpdateCourse: any = createAction('RECEIVE_UPDATE_COURSE');

export const updateCourse = data => (dispatch) => {
  dispatch(requestUpdateCourse());

  return axios.post(
    'http://api.ucavtor.ru/courses/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdateCourse(data)),
    err => error(),
  );
};

/**
 * DELETE COURSE
 */

export const requestDeleteCourse: any = createAction('REQUEST_DELETE_COURSE');
export const receiveDeleteCourse: any = createAction('RECEIVE_DELETE_COURSE');

export const deleteCourse = data => (dispatch) => {
  dispatch(requestDeleteCourse());

  return axios.post(
    'http://api.ucavtor.ru/courses/delete',
    data,
  ).then(
    () => dispatch(receiveDeleteCourse(data)),
    err => error(),
  );
};

