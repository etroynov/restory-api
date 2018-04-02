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
 * LIST ORGANIZATION
 */


export const requestOrganizations: any = createAction('REQUEST_ORGANIZATIONS');
export const receiveOrganizations: any = createAction('RECEIVE_ORGANIZATIONS');


export const fetchOrganizations = () => (dispatch) => {
  dispatch(requestOrganizations());

  return axios.get(
    'http://localhost:8081/organizations',
  ).then(
    ({ data }) => dispatch(receiveOrganizations(data)),
    err => error(),
  );
};

/**
 * CREATE ORGANIZATION
 */

export const requestCreateOrganization: any = createAction('REQUEST_CREATE_ORGANIZATION');
export const receiveCreateOrganization: any = createAction('RECEIVE_CREATE_ORGANIZATION');

export const createOrganization = data => (dispatch) => {
  dispatch(requestCreateOrganization());

  return axios.post(
    'http://localhost:8081/organizations/store',
    data,
  ).then(
    ({ data }) => dispatch(receiveCreateOrganization(data)),
    err => error(),
  );
};

/**
 * UPDATE ORGANIZATION
 */

export const requestUpdateOrganization: any = createAction('REQUEST_UPDATE_ORGANIZATION');
export const receiveUpdateOrganization: any = createAction('RECEIVE_UPDATE_ORGANIZATION');

export const updateOrganization = data => (dispatch) => {
  dispatch(requestUpdateOrganization());

  return axios.post(
    'http://localhost:8081/organizations/update',
    data,
  ).then(
    ({ data }) => dispatch(receiveUpdateOrganization(data)),
    err => error(),
  );
};

/**
 * DELETE ORGANIZATION
 */

export const requestDeleteOrganization: any = createAction('REQUEST_DELETE_ORGANIZATION');
export const receiveDeleteOrganization: any = createAction('RECEIVE_DELETE_ORGANIZATION');

export const deleteOrganization = data => (dispatch) => {
  dispatch(requestDeleteOrganization());

  return axios.post(
    'http://localhost:8081/organizations/delete',
    data,
  ).then(
    ({ data }) => dispatch(receiveDeleteOrganization(data)),
    err => error(),
  );
};

