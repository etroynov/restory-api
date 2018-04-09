/**
 * Vendor
 */

import * as React from 'react';
import Helmet from 'react-helmet';

import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

/**
 * Actions
 */

import { fetchOrganizations } from '../actions/organizationsActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/organizations';
import Show from '../components/organizations/show';
import Edit from '../components/organizations/edit';

/*!
 * Expo
 */

const Organizations = ({ location }) => {
  const { pathname } = location;

  let title = '';

  switch (pathname) {
    case '/organizations/create':
      title = 'Новая организация';
      break;
    
    default:
      title = 'Организации';
      break;
  }

  return (
    <Dashboard>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff', border: '1px solid #eeeeee' }}>
        <h1 style={{ margin: 0 }}>{title}</h1>
      </header>

      <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
        <Switch>
          <Route exact path="/organizations" component={Index} />
          <Route path="/organizations/edit/:id" component={Edit} />
        </Switch>
      </section>
    </Dashboard>
  );
};

export default compose(
  connect(null, { fetchOrganizations }),
  lifecycle({
    componentDidMount() {
      this.props.fetchOrganizations();
    },
  }),
)(Organizations as any);
