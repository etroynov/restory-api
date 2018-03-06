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
import Create from '../components/questions/create';
import Edit from '../components/questions/edit';

/*!
 * Expo
 */

const Questions = ({ location }) => (
  <Dashboard>
    <Helmet>
      <title>{
        location.pathname.split('/').includes('edit')
        ? 'Редактирование вопроса'
        : 'Новый вопрос'
      }</title>
    </Helmet>
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff', border: '1px solid #eeeeee' }}>
      <h1 style={{ margin: 0 }}>
      {location.pathname.split('/').includes('edit')
        ? 'Редактирование вопроса'
        : 'Новый вопрос'}
      </h1>
    </header>

    <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
      <Switch>
        <Route exact path="/questions/create/:course" component={Create} />
        <Route path="/questions/edit/:id" component={Edit} />
      </Switch>
    </section>
  </Dashboard>
);

export default Questions;
