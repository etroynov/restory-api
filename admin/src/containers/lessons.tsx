/**
 * Vendor
 */

import * as React from 'react';
import Helmet from 'react-helmet';

import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

/**
 * Components
 */

import Dashboard from '../components/layout';
import Create from '../components/lessons/create';
import Edit from '../components/lessons/edit';

/*!
 * Expo
 */

const Lessons = ({ location }) => (
  <Dashboard>
    <Helmet>
      <title>{
        location.pathname.split('/').includes('edit')
        ? 'Редактирование урока'
        : 'Новый урок'
      }</title>
    </Helmet>
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff', border: '1px solid #eeeeee' }}>
      <h1 style={{ margin: 0 }}>
      {location.pathname.split('/').includes('edit')
        ? 'Редактирование урока'
        : 'Новый урок'}
      </h1>
    </header>

    <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
      <Switch>
        <Route exact path="/lessons/create/:course" component={Create} />
        <Route path="/lessons/edit/:id" component={Edit} />
      </Switch>
    </section>
  </Dashboard>
);

export default Lessons;
