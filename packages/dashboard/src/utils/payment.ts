/*!
 * Vendor
 */

import axios from 'axios';

/*!
 * Expo
 */

export const init = (userId, courseId) => axios.post(
  'http://api.ucavtor.ru/payments/create',
  { userId, courseId },
);
