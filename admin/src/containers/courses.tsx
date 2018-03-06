/*!
 * Vendor
 */

import * as React from 'react';
import Helmet from 'react-helmet';

import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

/*!
 * Actions
 */

import { fetchCourses } from '../actions/coursesActions';
import { fetchSections } from '../actions/sectionsActions';

/*!
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/courses';
import Create from '../components/courses/create';
import Edit from '../components/courses/edit';

/*!
 * Expo
 */

const Courses = ({ location }) => {
  const { pathname } = location;

  let title = '';

  switch (pathname) {
    case '/courses/create':
      title = 'Новый курс';
      break;
    
    default:
      title = 'Курсы';
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
            <Link to="/courses/create">Добавить курс</Link>
          </Button>
        </h1>
      </header>

      <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
        <Switch>
          <Route exact path="/courses" component={Index} />
          <Route exact path="/courses/create" component={Create} />
          <Route path="/courses/edit/:id" component={Edit} />
        </Switch>
      </section>
    </Dashboard>
  );
};

export default compose(
  connect(null, { fetchSections, fetchCourses }),
  lifecycle({
    componentDidMount() {
      this.props.fetchSections();
      this.props.fetchCourses();
    },
  }),
)(Courses as any);
