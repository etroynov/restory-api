/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Select, Tabs } from 'antd';

/*!
 * Actions
 */

import { createQuestion } from '../../actions/questionsActions';
import { success } from './../../utils/modals';

/*!
 * Components
 */

const FormItem = Form.Item;

/**
 * Expo
 */

let uuid = 0;

class LessonCreateForm extends React.Component {
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  componentDidMount() {
    const { course } = this.props.match.params;

    this.setState({ course });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createQuestion({ ...values, ...this.state }).then(success);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {

      return (
        <FormItem
          required={false}
          key={k}
        >
          {getFieldDecorator(`answers[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: 'Поле ответ не должно быть пустым, если оно ненужно удалите его.',
            }],
          })(
            <Input style={{ width: '97%', marginRight: 10 }} />,
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('question', {
            rules: [{ required: true, message: 'Укажите вопрос!' }],
          })(<Input placeholder="Вопрос" />)}
        </FormItem>
        {formItems}
        <FormItem>
          <Button type="dashed" onClick={this.add} style={{ width: '100%' }}>
            <Icon type="plus" /> Добавить ответ
          </Button>
        </FormItem>
        <FormItem label="Номер правильного ответа ( отсчет начинается с 0 )">
          {getFieldDecorator('rightAnswer', {
            rules: [{ required: true, message: 'Укажите номер правильного ответа!' }],
            initialValue: 0,
          })(<Input placeholder="0" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLessonCreateForm = Form.create()(LessonCreateForm);


export default connect(null,
  { createQuestion },
)(WrappedLessonCreateForm as any);
