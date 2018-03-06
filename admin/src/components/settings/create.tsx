/*!
 * Vendor
 */

import * as React from 'react';
import CKEditor from 'react-ckeditor-component';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd';

/*!
 * Actions
 */

import { createSettings } from '../../actions/settingsActions';

import { success } from './../../utils/modals';

/*!
 * Components
 */

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

/**
 * Expo
 */

class SettingsCreateForm extends React.Component<any, any> {
  state = {
    content: '',
    status: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createSettings({ ...values, ...this.state }).then(success);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { content } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Укажите название!' }],
          })(<Input placeholder="Почтовый адрес" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('slug', {
            rules: [{ required: true, message: 'Укажите ключ!' }],
          })(<Input placeholder="например: email" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('value', {
            rules: [{ required: true, message: 'Укажите значение!' }],
          })(<Input placeholder="например: test@gmail.com" />)}
        </FormItem>

        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSettingsCreateForm = Form.create()(SettingsCreateForm as any);

export default connect(
  null,
  { createSettings },
)(WrappedSettingsCreateForm as any);
