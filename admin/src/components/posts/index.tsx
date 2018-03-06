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

import { deletePost } from '../../actions/postsActions';

/*!
 * Columns
 */

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Дата',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  },  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render(text) {
      const status = parseInt(text, 10);

      switch (status) {
        case 1: return <p>опубликованно</p>;
        default: return <p>черновик</p>;
      }
    },
  }, {
    title: 'Действия',
    key: 'action',
    render: (text, record) => (
      <div>
        {/* <Link to="/posts/show">
          <Button type="primary" icon="eye" />
        </Link> */}

        <Link to={`/posts/edit/${record._id}`}>
          <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
        </Link>

        <Button type="primary" icon="delete" style={{ marginLeft: 10 }} onClick={() => deletePost(record._id)} />
      </div>
    ),
  },
];

/*!
 * Expo
 */

const Posts = ({ loading, data }) => (
  <Table 
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ posts: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
)(Posts as any);
