/*!
 * Vendor
 */

import * as React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table, Button, Switch } from 'antd';

/*!
 * Actions
 */

import { deletePage } from '../../actions/pagesActions';

/*!
 * Columns
 */

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Создана',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  }, {
    title: 'Обновлена',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  }, {
    title: 'Действия',
    key: 'action',
    render: (text, record) => (
      <div>
        <Link to={`/sections/edit/${record._id}`}>
          <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
        </Link>
      </div>
    ),
  },
];

/*!
 * Expo
 */

const PagesIndex = ({ loading, data }) => (
  <Table 
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ sections: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
)(PagesIndex as any);
