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

import { deleteCourse } from '../../actions/coursesActions';

/*!
 * Columns
 */

const columns: any = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Кол - во уроков',
    dataIndex: 'lessons',
    key: 'lessons',
    render: (lessons, record) => lessons.length,
  }, {
    title: 'Создан',
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
  },
];

/*!
 * Expo
 */

const CoursesIndex = ({ loading, data, deleteCourse }) => (
  <Table 
    columns={[
      ...columns,
      {
        title: 'Действия',
        key: 'action',
        render: (text, { _id }) => (
          <div>
            <Link to={`/courses/edit/${_id}`}>
              <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
            </Link>

            <Button type="primary" icon="delete" style={{ marginLeft: 10 }} onClick={() => deleteCourse({ _id })} />
          </div>
        ),
      },
    ]}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ courses: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
  { deleteCourse },
)(CoursesIndex as any);
