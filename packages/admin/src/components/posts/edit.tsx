/*!
 * Vendor
 */

import * as React from 'react';
import CKEditor from 'react-ckeditor-component';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd';

/*!
 * Actions
 */

import { success } from './../../utils/modals';
import { updatePost } from '../../actions/postsActions';

/*!
 * Components
 */

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

const Devider = styled.hr`
  border: none; 
  border-bottom: 1px solid #eeeeee;
`;

/*!
 * Expo
 */

class PostEditForm extends React.Component<any, {
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
    const { posts, match: { params } } = this.props;

    const filteredPost = posts.data.filter(({ _id }) => _id === params.id);

    return this.setState({
      ...filteredPost[0],
    });
  }

  private handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.updatePost({ ...this.state, ...values }).then(() => success());
      }
    });
  }

  private updateContent = (content) => {
    this.setState({ content });
  }

  private handleChangeContent = (e) => {
    const content = e.editor.getData();

    this.setState({ content });
  }

  private handelChangeStatus = status => this.setState({ status });

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
              { required: true, message: 'Укажите название!' }
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

        <Devider />

        <h3>СЕО</h3>
        <Devider />

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
          <Devider />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedPostEditForm = Form.create()(PostEditForm as any);

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(
  mapStateToProps,
  { updatePost },
)(WrappedPostEditForm as any);
