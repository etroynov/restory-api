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

import {
  fetchPayment,
  updatePayment,
  checkPaymentsStatus,
} from '../../actions/paymentsActions';

/*!
 * Utils
 */

import searchToObject from '../../utils/searchToObject';

/*!
 * Components
 */

import Dashboard from '../../components/layout';
import Index from '../../components/payments';

/*!
 * Expo
 */

const Courses = ({ payments, location, checkPaymentsStatus }) => (
  <Dashboard>
    <Helmet>
      <title>Платежи</title>
    </Helmet>
    <header
      style={{
        marginBottom: 20,
        padding: '10px 20px',
        background: '#ffffff',
        border: '1px solid #eeeeee',
      }}
    >
      <h1 style={{ margin: 0 }}>
        Платежи
        {/* <Button 
          type="primary"
          loading={payments.loading}
          style={{ marginTop: 5, float: 'right' }}
          onClick={checkPaymentsStatus}
        >
          Проверить статус оплаты
        </Button> */}
      </h1>
    </header>

    <section
      style={{
        padding: 10,
        background: '#ffffff',
        border: '1px solid #eeeeee',
      }}
    >
      <Switch>
        <Route path="/payments" component={Index} />
      </Switch>
    </section>
  </Dashboard>
);

const mapStateToProps = ({ user, payments }) => ({ user, payments });

export default compose(
  connect(mapStateToProps, { fetchPayment, updatePayment, checkPaymentsStatus }),
  lifecycle({
    componentDidMount() {
      const { user, location, fetchPayment, updatePayment } = this.props;
      const { orderid, result } = searchToObject(location.search);

      if (orderid && result === 'True') {
        updatePayment({
          _id: orderid,
          state: 'Charged',
        });
      }

      fetchPayment(user._id);
    }
  })
)(Courses as any);
