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

import { fetchPages } from '../actions/pagesActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/pages';
import Create from '../components/pages/create';
import Edit from '../components/pages/edit';

/*!
 * Expo
 */

const Pages = ({ location }) => {
  const { pathname } = location;

  let title = '';

  switch (pathname) {
    case '/pages/create':
      title = 'Новая страница';
      break;
    
    default:
      title = 'Страницы';
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
            <Link to="/pages/create">Добавить страницу</Link>
          </Button>
        </h1>
      </header>

      <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
        <Switch>
          <Route exact path="/pages" component={Index} />
          <Route exact path="/pages/create" component={Create} />
          <Route path="/pages/edit/:id" component={Edit} />
        </Switch>
      </section>
    </Dashboard>
  );
};

export default compose(
  connect(null, { fetchPages }),
  lifecycle({
    componentDidMount() {
      this.props.fetchPages();
    },
  }),
)(Pages as any);
