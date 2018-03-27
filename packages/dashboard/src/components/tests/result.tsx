import * as React from 'react';
import Dashboard from '../layout';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'antd';

const columns = [{
  title: 'Вопрос',
  dataIndex: 'question',
  key: 'question',
}, {
  title: 'Ответ',
  key: 'answer',
  width: 200,
  render: ({ key, rightAnswer, userAnswer }) =>
    rightAnswer === userAnswer
      ? <Icon type="check-circle" style={{ color: 'green' }} />
      : <Icon type="close-circle" style={{ color: 'red' }} />,
}];

class Result extends React.Component<{
  name: string;
  steps: any[];
}, {}> {
  render() {
    const { name, steps  } = this.props;

    return (
      <Dashboard>
        <section
            style={{
              padding: 20,
              background: '#ffffff',
            }}
          >
            <header
              style={{
                padding: 20,
                textAlign: 'center',
                fontSize: 24,
                borderBottom: '1px solid #eeeeee',
                background: 'green',
              }}
            >
              <h3 style={{ margin: 0, color: '#fff' }}>{name} - ( пройден )</h3>
            </header>

            <section style={{ overflow: 'hidden' }}>
              <Table pagination={false} dataSource={steps} columns={columns} />
              <div style={{ float: 'right', padding: '20px 0' }}>
                <Button type="primary" icon="printer" style={{ marginRight: 10 }} onClick={() => window.print() }>Распечатать результат</Button>
                <Button type="primary" icon="check"><Link to="/courses" style={{ color: '#fff' }}>завершить</Link></Button>
              </div>
            </section>
          </section>
      </Dashboard>
    );
  }
}

export default Result;
