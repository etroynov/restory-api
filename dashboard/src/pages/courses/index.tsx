/*!
 * Vendor
 */

import * as React from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

import { compose, withState } from 'recompose';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Row, Col, Button, Modal } from 'antd';

/*!
 * Components
 */

import Dashboard from '../../components/layout';

declare const require: any;

/*!
 * Utils
 */

import { init } from '../../utils/payment';

/*!
 * Payment modal
 */

function error() {
  const modal = Modal.error({
    title: 'Ошибка',
    content: 'На данный момент покупка курсов недоступна, мы работаем над тем что бы устранить эту ошибку как можно быстрее',
  });
}


/*!
 * Expo
 */

const Index = ({ courses, user, status, setPaymentStatus }) => (
  <Dashboard title="Курсы">
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
      <h1 style={{ margin: 0 }}>Доступные курсы</h1>
    </header>
    <Row gutter={16}>
      {courses.data.filter(item => item.status > 0).map(({ _id, name, content, thumb, price, duration }) => (
        <Col key={_id} span={6}>
          <Card title={name}
            style={{ marginBottom: 15 }}
            cover={<img src={thumb} alt={name} />}
            actions={[
              <p style={{ margin: 0, padding: 5, fontSize: 24 }}>{price} / {duration} ч.</p>,
              <Button type="primary" loading={status} onClick={() => {
                setPaymentStatus(true);

                return init(user._id, _id).then(
                    ({ data }) => location.href = data.RedirectUrl,
                    () => error(),
                  );
              }}>Купить</Button>,
            ]}
          >
          </Card>
        </Col>
      )}
    </Row>
  </Dashboard>
);

const mapStateToProps = ({ courses, user }) => ({ courses, user });

export default compose(
  connect(mapStateToProps),
  withState('status', 'setPaymentStatus', false),
)(Index as any);
