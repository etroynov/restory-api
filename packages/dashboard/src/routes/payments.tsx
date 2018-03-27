/*!
 * Vendor
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

/*!
 * Pages
 */

import Index from '../pages/payments';

/*!
 * Expo
 */

const Payments = () => (
  <Switch>
    <Route path="/payments" component={Index} />
  </Switch>
);

export default Payments;

