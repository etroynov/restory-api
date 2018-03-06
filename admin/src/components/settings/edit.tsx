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

import { success } from './../../utils/modals';
import { updateSettings } from '../../actions/settingsActions';

/*!
 * Components
 */

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

/*!
 * Expo
 */

class SettingsEditForm extends React.Component<any, {
  name: string;
  value: string;
  slug: string;
}> {
  state = {
    name: '',
    value: '',
    slug: '',
  };

  private componentDidMount() {
    const { settings, match: { params } } = this.props;

    const filteredSettings = settings.data.filter(({ _id }) => _id === params.id);

    return this.setState({
      ...filteredSettings[0],
    });
  }

  private handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.updateSettings({ ...this.state, ...values }).then(() => success());
      }
    });
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const {
      name,
      value,
      slug,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Укажите название!' }],
            initialValue: name,
          })(<Input placeholder="Почтовый адрес" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('slug', {
            rules: [{ required: true, message: 'Укажите ключ!' }],
            initialValue: slug,
          })(<Input placeholder="например: email" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('value', {
            rules: [{ required: true, message: 'Укажите значение!' }],
            initialValue: value,
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

const WrappedSettingsEditForm = Form.create()(SettingsEditForm as any);

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
  { updateSettings },
)(WrappedSettingsEditForm as any);
