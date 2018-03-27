/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';

/*!
 * Actions
 */

import { fetchUserInfo } from '../../actions/userActions';


/*!
 * Components
 */

import Dashboard from '../../components/layout';
import Profile from '../../components/home/profile';
import Courses from '../../components/courses';

/*!
 * Expo
 */

const Home = ({ user }) => (
  <Dashboard title="Главная">
     <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
      <h1 style={{ margin: 0 }}>Главная</h1>
    </header>
    <div>
      <Row gutter={16}>
        <Col span={5}>
          <Card title="ваш профиль" className="dashboard-card">
            <Profile {...user} />
          </Card>
        </Col>
        <Col span={10}>
          <Courses title="активные курсы" items={user.courses} />
        </Col>
        <Col span={9}>
          <Courses title="завершенные курсы" />
        </Col>
      </Row>
    </div>
  </Dashboard>
);

const mapDispatchToProps = ({ user }) => ({ user });

export default compose(
  connect(mapDispatchToProps, { fetchUserInfo }),
  lifecycle({
    componentDidMount() {
      const { user, fetchUserInfo } = this.props;

      fetchUserInfo(user._id);
    },
  }),
)(Home as any);
