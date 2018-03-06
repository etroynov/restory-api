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

import { fetchPosts } from '../actions/postsActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/posts';
import Create from '../components/posts/create';
import Edit from '../components/posts/edit';

/*!
 * Expo
 */

const Posts = ({ location }) => {
  const { pathname } = location;

  let title = '';

  switch (pathname) {
    case '/posts/create':
      title = 'Новая Запись';
      break;
    
    default:
      title = 'Записи';
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
            <Link to="/posts/create">Добавить запись</Link>
          </Button>
        </h1>
      </header>

      <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
        <Switch>
          <Route exact path="/posts" component={Index} />
          <Route exact path="/posts/create" component={Create} />
          <Route path="/posts/edit/:id" component={Edit} />
        </Switch>
      </section>
    </Dashboard>
  );
};

export default compose(
  connect(null, { fetchPosts }),
  lifecycle({
    componentDidMount() {
      this.props.fetchPosts();
    },
  }),
)(Posts as any);
