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
