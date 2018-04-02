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
import { updateOrganization } from '../../actions/organizationsActions';

/*!
 * Components
 */

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

/*!
 * Expo
 */

class OrganizationEditForm extends React.Component<any, {
  title: string;
  description: string;
  name: string;
  content: string;
  status: number;
  slug: string;
}> {
  state = {
    title: '',
    description: '',
    name: '',
    content: '',
    status: 0,
    slug: '',
  };

  private componentDidMount() {
    const { organizations, match: { params } } = this.props;

    const filteredOrganization = organizations.data.filter(({ _id }) => _id === params.id);

    return this.setState({ ...filteredOrganization[0] });
  }

  private handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this
          .props
          .updateOrganization({ ...this.state, ...values })
          .then(() => success());
      }
    });
  }

  private updateContent = content => this.setState({ content });
  private handelChangeStatus = status => this.setState({ status });
  private handleChangeContent = e => this.setState({ content: e.editor.getData() });

  public render() {
    const { getFieldDecorator } = this.props.form;
    const {
      title,
      description,
      name,
      content,
      slug,
      status,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: 'Укажите название!' },
            ],
            initialValue: name,
          })(<Input placeholder="название страницы" />)}
        </FormItem>
        <FormItem>
          <CKEditor
            config={{
              language: 'ru',
              allowedContent: true,
            }}
            content={content}
            events={{
              change: this.handleChangeContent,
            }}
          />
        </FormItem>

        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />

        <h3>СЕО</h3>
        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />

        <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Укажите заголовок!' }],
            initialValue: title,
          })(<Input placeholder="заголовок страницы ( тег title )" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Укажите описание!' }],
            initialValue: description,
          })(
            <TextArea
              rows={4}
              placeholder="краткое описание ( тег meta='description' )"
            />,
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('slug', {
            rules: [{ required: true, message: 'Укажите ЧПУ!' }],
            initialValue: slug,
          })(
            <Input placeholder="адрес страницы, например: testpage" />,
          )}
        </FormItem>

        <FormItem>
          <Select defaultValue={String(status)} onChange={this.handelChangeStatus}>
            <Option value="0">Черновик</Option>
            <Option value="1">Опубликованно</Option>
          </Select>
        </FormItem>

        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedOrganizationEditForm = Form.create()(OrganizationEditForm as any);

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(
  mapStateToProps,
  { updateOrganization },
)(WrappedOrganizationEditForm as any);
