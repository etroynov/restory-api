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

import { fetchUsers } from '../actions/usersActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/users';
import Edit from '../components/users/edit';

/*!
 * Expo
 */

const Users = ({ location }) => {
  const { pathname } = location;

  let title = '';

  switch (pathname) {
    case '/users/create':
      title = 'Новый пользователь';
      break;
    
    default:
      title = 'Пользователи';
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
            <Link to="/users/create">Добавить страницу</Link>
          </Button>
        </h1>
      </header>

      <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
        <Switch>
          <Route exact path="/users" component={Index} />
          <Route path="/users/edit/:id" component={Edit} />
        </Switch>
      </section>
    </Dashboard>
  );
};

export default compose(
  connect(null, { fetchUsers }),
  lifecycle({
    componentDidMount() {
      this.props.fetchUsers();
    },
  }),
)(Users as any);
