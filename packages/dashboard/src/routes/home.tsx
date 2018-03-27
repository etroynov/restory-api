/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';

/*!
 * Pages
 */

import Index from '../pages/home';

/*!
 * Expo
 */

const Home = () => (
  <Switch>
    <Route exact path="/" component={Index} />
  </Switch>
);

const mapStateToProps = ({ user }) => ({ user });

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillMount() {
      if (!this.props.user.isAuthenticated) {
        location.href = '/auth';
      }
    },
  }),
)(Home);

