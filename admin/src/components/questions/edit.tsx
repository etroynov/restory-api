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
import { updateCourse } from '../../actions/coursesActions';

/*!
 * Components
 */

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

/*!
 * Expo
 */

class CourseEditForm extends React.Component<any, {
  title: string;
  description: string;
  name: string;
  content: string;
  price: number;
  duration: number;
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
    const { courses, match: { params } } = this.props;

    const filteredCourse = courses.data.filter(({ _id }) => _id === params.id);

    return this.setState({
      ...filteredCourse[0],
    });
  }

  private handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.updateCourse({ ...this.state, ...values }).then(() => success());
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
      price,
      duration,
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


        <h3>Дополнительные параметры</h3>
        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />

        <FormItem>
          {getFieldDecorator('price', {
            rules: [{ required: true, message: 'Укажите цену!' }],
            initialValue: price,
          })(
            <Input placeholder="стоимость курса" />,
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('duration', {
            rules: [{ required: true, message: 'Укажите продолжительность курса!' }],
            initialValue: duration,
          })(
            <Input placeholder="продолжительность курса в часах" />,
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

const WrappedCourseEditForm = Form.create()(CourseEditForm as any);

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(
  mapStateToProps,
  { updateCourse },
)(WrappedCourseEditForm as any);
