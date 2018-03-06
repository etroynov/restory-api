/*!
 * Vendor
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

/*!
 * Pages
 */

import Index from '../pages/tests';

/*!
 * Expo
 */

const Tests = () => (
  <Switch>
    <Route exact path="/tests" component={Index} />
  </Switch>
);

export default Tests;

