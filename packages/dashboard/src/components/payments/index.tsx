/*!
 * Vendor
 */

import * as React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table, Button } from 'antd';

/*!
 * Actions
 */


/*!
 * Columns
 */

const columns: any = [
  {
    title: 'Тип платежа',
    dataIndex: 'type',
    key: 'type',
    render: type => 'покупка курса',
  }, {
    title: 'Продукт',
    dataIndex: 'course',
    key: 'course',
    render: course => course.name,
  }, {
    title: 'Создан',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  },  {
    title: 'Статус',
    dataIndex: 'state',
    key: 'state',
    render(text) {
      switch (text) {
        case 'Charged': return 'оплачен';
        case 'Rejected': return 'отклонен';
        default: return 'ожидает оплаты';
      }
    },
  },
];

/*!
 * Expo
 */

const CoursesIndex = ({ payments, deleteCourse }) => (
  <Table 
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={payments.data}
    loading={payments.loading}
  />
);

const mapStateToProps = ({ payments }) => ({ payments });

export default connect(mapStateToProps)(CoursesIndex as any);
