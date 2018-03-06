/*!
 * Vendor
 */

import { createReducer } from 'redux-act';

/*!
 * Init state
 */

const initialState: IReducerState = {
  loading: false,
  data: [],
};

/*!
 * Actions
 */

import {
  requestPayments,
  receivePayments,
 
  requestPayment,
  receivePayment,

  requestPaymentStatus,
  receivePaymentStatus,
  
  requestUpdatePayment,
  receiveUpdatePayment,
} from '../actions/paymentsActions';

/*!
 * Expo
 */

const paymentsReducer = createReducer({
  // FETCH PAYMENTS
  [requestPayments]: state => ({ ...state, loading: true }),
  [receivePayments]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // FETCH PAYMENT
  [requestPayment]: state => ({ ...state, loading: true }),
  [receivePayment]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // FETCH PAYMENTS STATUS
  [requestPaymentStatus]: state => ({ ...state, loading: true }),
  [receivePaymentStatus]: (state, payload) => ({
    ...state,
    data: payload,
    loading: false,
  }),

  // UPDATE COURSE
  [requestUpdatePayment]: (state: IReducerState) => ({
    ...state,
    loading: true,
  }),
  [receiveUpdatePayment]: (state: IReducerState, payload) => {
    const data = state.data.map((item) => {
      if (item._id === payload._id) {
        return { ...item, ...payload };
      }

      return item;
    });

    return {
      data,
      loading: false,
    };
  }, 
}, initialState);

export default paymentsReducer as any;
