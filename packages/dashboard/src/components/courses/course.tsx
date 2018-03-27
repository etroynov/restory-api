/*!
 * Vendor
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card } from 'antd';

/**
 * Course widget represented short info about course
 * 
 * @param id - course id
 * @param name - course image
 * @param thumb - course name
 */

const Course = ({ _id, name, thumb }) => (
  <Col key={_id} span={12} style={{ marginBottom: 10, padding: '0 4px' }}>
    <Link to={`/courses/${_id}`}>
      <Card
        title={name}
        cover={<img src={thumb} alt={name} />}
      />
    </Link>
  </Col>
);

export default Course;
