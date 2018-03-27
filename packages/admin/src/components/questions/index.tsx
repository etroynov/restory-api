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

import { deleteQuestion } from '../../actions/questionsActions';

/*!
 * Columns
 */

const columns = [
  {
    title: 'Вопрос',
    dataIndex: 'question',
    key: 'question',
  }, {
    title: 'Создан',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  }, {
    title: 'Действия',
    key: 'action',
    render: (text, record) => (
      <div>
        <Link to={`/questions/edit/${record._id}`}>
          <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
        </Link>

        <Button type="primary" icon="delete" style={{ marginLeft: 10 }} onClick={() => deleteQuestion(record._id)} />
      </div>
    ),
  },
];

/*!
 * Expo
 */

const QuestionsIndex = ({ course, loading, data }) => (
  <div>
    <Table 
      columns={columns}
      rowKey={(record: any) => record._id}
      dataSource={data}
      loading={loading}
    />
    <div style={{ float: 'right', margin: '10px 0 5px 0' }}>
      <Link to={`/questions/create/${course}`}>
        <Button type="primary" style={{ marginLeft: 10 }}>Добавить вопрос</Button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = ({ questions: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
)(QuestionsIndex as any);
