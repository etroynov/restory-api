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

import { deleteLesson } from '../../actions/lessonsActions';

/*!
 * Columns
 */

const columns = [{
  title: 'Тема',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Создан',
  dataIndex: 'createdAt',
  key: 'createdAt',
  render: (text, record) => moment(text).locale('ru').format('L'),
}];

/*!
 * Expo
 */

const LessonsIndex = ({ course, data, deleteLesson }) => (
  <div>
    <Table
      columns={[
        ...columns,
        {
          title: 'Действия',
          key: 'action',
          render: (text, record) => (
            <div className="table-controls">
              <Link to={`/lessons/edit/${record._id}`} className="table-controls__item">
                <Button icon="edit" type="primary" />
              </Link>
              <Button
                className="table-controls__item"
                type="primary"
                icon="delete"
                onClick={() => deleteLesson({ _id: record._id })}
              />
            </div>
          ),
        },
      ]}
      rowKey={(record: any) => record._id}
      dataSource={data}
    />
    <div style={{ float: 'right', margin: '10px 0 5px 0' }}>
      <Link to={`/lessons/create/${course}`}>
        <Button type="primary" style={{ marginLeft: 10 }}>Добавить урок</Button>
      </Link>
    </div>
  </div>
);

export default connect(null,
  { deleteLesson },
)(LessonsIndex);
