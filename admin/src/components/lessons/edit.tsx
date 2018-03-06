/*!
 * Vendor
 */

import * as React from 'react';
import CKEditor from 'react-ckeditor-component';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Select, Tabs } from 'antd';

/*!
 * Actions
 */

import { fetchLesson, updateLesson } from '../../actions/lessonsActions';
import { success } from './../../utils/modals';

/*!
 * Components
 */

const FormItem = Form.Item;

/**
 * Expo
 */

class LessonUpdateForm extends React.Component<{
  _id: string;
  form: any;
  updateLesson: any;
  fetchLesson: any;
  params: any;
}, any> {
  state = {
    _id: '',
    name: '',
    content: ''
  };

  componentDidMount() {
    const { match: { params } } = this.props;

    this.fetchLesson(params.id);
  }

  fetchLesson = async (id) => {
    const { payload } = await this.props.fetchLesson(id);

    return this.setState({ ...payload });
  }

  private handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = { ...this.state, ...values };

        this.props.updateLesson(data).then(() => success());
      }
    });
  }

  updateContent       = content => this.setState({ content });
  handelChangeStatus  = status  => this.setState({ status });
  handleChangeContent = e       => this.setState({ content: e.editor.getData() });
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { name, content } = this.state;

    let editor = <p />;

    if (!!content.length) {
      console.info(content);
      editor = <CKEditor 
        content={content}
        config={{ language: 'ru', allowedContent: true }}
        events={{ change: this.handleChangeContent }}
      />;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Укажите тему урока!' }],
            initialValue: name,
          })(<Input placeholder="тема урока" />)}
        </FormItem>
        <FormItem>
          {editor}
        </FormItem>

        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLessonUpdateForm = Form.create()(LessonUpdateForm as any);

export default connect(null,
  { fetchLesson, updateLesson },
)(WrappedLessonUpdateForm as any);
