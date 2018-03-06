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

import { deleteSettings } from '../../actions/settingsActions';

/*!
 * Columns
 */

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Ключ',
    dataIndex: 'slug',
    key: 'sulg',
  }, {
    title: 'значение',
    dataIndex: 'value',
    key: 'value',
  }, {
    title: 'Действия',
    key: 'action',
    render: (text, record) => (
      <div>
        <Link to={`/settings/edit/${record._id}`}>
          <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
        </Link>
      </div>
    ),
  },
];

/*!
 * Expo
 */

const SettingssIndex = ({ loading, data }) => (
  <Table 
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ settings: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
)(SettingssIndex as any);
