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

import { fetchSections } from '../actions/sectionsActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/sections';
import Create from '../components/sections/create';
import Edit from '../components/sections/edit';

/*!
 * Expo
 */

const Sections = ({ location }) => {
  const { pathname } = location;

  let title = '';

  switch (pathname) {
    case '/sections/create':
      title = 'Новое направление';
      break;
    
    default:
      title = 'Направления';
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
            <Link to="/sections/create">Добавить раздел</Link>
          </Button>
        </h1>
      </header>

      <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
        <Switch>
          <Route exact path="/sections" component={Index} />
          <Route exact path="/sections/create" component={Create} />
          <Route path="/sections/edit/:id" component={Edit} />
        </Switch>
      </section>
    </Dashboard>
  );
};

export default compose(
  connect(null, { fetchSections }),
  lifecycle({
    componentDidMount() {
      this.props.fetchSections();
    },
  }),
)(Sections as any);
