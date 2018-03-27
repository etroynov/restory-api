/*!
 * Vendor
 */

import * as React from 'react';
import { Row, Card } from 'antd';

/*!
 * Components
 */

import Course from './course';

/*!
 * Expo
 */

const Courses: React.SFC<ICourses> = ({ title = '', items = [] }) => (
  <Card title={title} className="dashboard-card">
    {
      !!items.length
      ? <Row gutter={8}>{ items.map(item => <Course {...item} />) }</Row>
      : <p className="label-empty-data">курсов нет</p>
    }
  </Card>
);

export default Courses;
