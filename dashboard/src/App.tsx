/*!
 * Vendor
 */

import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

/*!
 * Routes
 */

import Test     from './routes/tests';
import Home     from './routes/home';
import Auth     from './routes/auth';
import Courses  from './routes/courses';
import Payments from './routes/payments';

/*!
 * Expo
 */

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/courses" component={Courses} />
    <Route path="/payments" component={Payments} />
    <Route path="/tests" component={Test} />
    <Route path="/auth" component={Auth} />
  </Switch>
);

export default withRouter(App);
