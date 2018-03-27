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

import { createLesson } from '../../actions/lessonsActions';
import { success } from './../../utils/modals';

/*!
 * Components
 */

const FormItem = Form.Item;

/**
 * Expo
 */

class LessonCreateForm extends React.Component<{
  course: string;
  form: any;
  createLesson: any;
  params: any;
}, any> {
  state = {
    content: '',
    status: 0,
  };

  componentDidMount() {
    const { course } = this.props.match.params;

    this.setState({ course });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createLesson({ ...values, ...this.state }).then(success);
      }
    });
  }

  updateContent       = content => this.setState({ content });
  handelChangeStatus  = status  => this.setState({ status });
  handleChangeContent = e       => this.setState({ content: e.editor.getData() });
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { content } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Укажите тему урока!' }],
          })(<Input placeholder="тема урока" />)}
        </FormItem>
        <FormItem>
          <CKEditor 
            config={{
              language: 'ru',
              allowedContent: true,
            }}
            content={content} 
            events={{ change: this.handleChangeContent }}
          />
        </FormItem>

        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLessonCreateForm = Form.create()(LessonCreateForm as any);

export default connect(null,
  { createLesson },
)(WrappedLessonCreateForm as any);
