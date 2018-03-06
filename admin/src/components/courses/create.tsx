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

import { createCourse } from '../../actions/coursesActions';
import { success } from './../../utils/modals';

/*!
 * Components
 */

const Option = Select.Option;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const { TextArea } = Input;

/*!
 * tagsCloud
 */

const tagsCloud = [{
  name: 'Дерматовенерология',
  slug: 'dermatovenerologija',
}, {
  name: 'Кардиология',
  slug: 'kardiologija',
}, {
  name: 'Организация здравоохранения и общественное здоровье',
  slug: 'zdravoohranenija',
}, {
  name: 'Педиатрия',
  slug: 'pediatrija',
}, {
  name: 'Психиатрия',
  slug: 'psihiatrija',
}, {
  name: 'Психотерапия',
  slug: 'psihoterapija',
}, {
  name: 'Рентгенология',
  slug: 'rentgenologija',
}, {
  name: 'Терапевтическая стоматология',
  slug: 'stomatologija',
}, {
  name: 'Терапия',
  slug: 'terapija',
}, {
  name: 'Фармацевтическая химия и фармакогнозия',
  slug: 'farmacevtika',
}, {
  name: 'Эндокринология',
  slug: 'jendokrinologija',
}];

/*!
 * Expo
 */

class CourseCreateForm extends React.Component<any, any> {
  state = {
    content: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createCourse({ ...values, ...this.state }).then(success);
      }
    });
  } 

  handleChangeContent = e => this.setState({ content: e.editor.getData() });
  
  render() {
    const { form: { getFieldDecorator }, sections } = this.props;
    const { content } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="ОБЩЕЕ" key="1">
            <FormItem>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Укажите название!' }],
              })(<Input placeholder="название курса" />)}
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
          </TabPane>
          <TabPane tab="СЕО" key="2">
            <FormItem>
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Укажите заголовок!' }],
              })(<Input placeholder="заголовок страницы ( тег title )" />)}
            </FormItem>

            <FormItem>
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Укажите описание!' }],
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
              })(
                <Input placeholder="адрес страницы, например: testpage" />,
              )}
            </FormItem>
          </TabPane>
          <TabPane tab="ДАННЫЕ" key="3">
            <FormItem>
              {getFieldDecorator('sections', {
                rules: [{ required: true, message: 'Вы должны выбрать хотя бы один раздел!' }],
              })(
                <Select
                  mode="tags"
                  placeholder="раздел"
                >
                  {sections.data.map(({ _id, name }) => <Option key={_id} value={_id}>{name}</Option>)}
                </Select>,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('tags')(
                <Select
                  mode="tags"
                  placeholder="Теги"
                >
                  {tagsCloud.map(({ name, slug }) => <Option key={slug} value={slug}>{name}</Option>)}
                </Select>,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('price', {
                rules: [{ required: true, message: 'Укажите цену!' }],
              })(
                <Input placeholder="стоимость курса" />,
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('duration', {
                rules: [{ required: true, message: 'Укажите продолжительность курса!' }]
              })(
                <Input placeholder="продолжительность курса в часах" />,
              )}
            </FormItem>
          </TabPane>
        </Tabs>

        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />

        <FormItem>
          {getFieldDecorator('status', {
            initialValue: '0',
          })(
            <Select>
              <Option value="0">Черновик</Option>
              <Option value="1">Опубликованно</Option>
            </Select>,
          )}
        </FormItem>

        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedCourseCreateForm = Form.create()(CourseCreateForm as any);

const mapStateToProps = ({ sections }) => ({ sections });

export default connect(
  mapStateToProps,
  { createCourse },
)(WrappedCourseCreateForm as any);
