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

import { fetchSettings } from '../actions/settingsActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/settings';
import Create from '../components/settings/create';
import Edit from '../components/settings/edit';

/*!
 * Expo
 */

const Settings = ({ location }) => {
  const { pathname } = location;

  let title = '';

  switch (pathname) {
    case '/settings/create':
      title = 'Новый параметр';
      break;
    
    default:
      title = 'Настройки';
      break;
  }

  return (
    <Dashboard>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff', border: '1px solid #eeeeee' }}>
        <h1 style={{ margin: 0 }}>
          {title}
          <Button type="primary" style={{ float: 'right', marginTop: 5 }} >
            <Link to="/settings/create">Добавить параметр</Link>
          </Button>
        </h1>
      </header>

      <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
        <Switch>
          <Route exact path="/settings" component={Index} />
          <Route exact path="/settings/create" component={Create} />
          <Route path="/settings/edit/:id" component={Edit} />
        </Switch>
      </section>
    </Dashboard>
  );
};

export default compose(
  connect(null, { fetchSettings }),
  lifecycle({
    componentDidMount() {
      this.props.fetchSettings();
    },
  }),
)(Settings as any);
