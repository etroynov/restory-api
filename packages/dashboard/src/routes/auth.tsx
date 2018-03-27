/*!
 * Vendor
 */

import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

/*!
 * Pages
 */

import Index from '../pages/auth';
import Registration from '../pages/auth/registration';

/*!
 * Expo
 */

const Auth = () => (
  <Switch>
    <Route exact path="/auth/registration" component={Registration} />
    <Route path="/auth" component={Index} />
  </Switch>
);

export default Auth;

