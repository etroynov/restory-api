/*!
 * Vendor
 */

import * as React from 'react';
import axios from 'axios';

import { Layout, Row, Col, Form, Icon, Input, Button, Checkbox, Modal } from 'antd';

/*!
 * Components
 */

const { Content } = Layout;
const FormItem = Form.Item;

declare const require: any;
/*!
 * Expo
 */

class PersonalRegistration extends React.Component<any, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        const { status } = await axios.post('http://api.ucavtor.ru/users/create', values);

        if (status !== 200) {
          Modal.error({
            title: 'Упс, что то пошло не так!',
            content: `В ходе регистрации возникла ошибка, попробуйте выполнить регистрацию еще раз. Если ошибка возникает повторно напишите нам на support@ucavtor.ru или в онлайн консультант.`,
          });
        }

        if (status === 200) {
          Modal.success({
            title: 'Регистрация завершена!',
            content: `Вы успешно прошли регистрацию на сайте, инструкция с доступами для входа на сайт отправлена на почтовый ящик ${values.email}.`,
            onOk: () => location.pathname = '/login',
            onCancel: () => location.pathname = '/login',
          });
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
        <Content style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: 900, height: 800 }}>
          <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
            <img
              src="http://ucavtor.ru/static/img/whitecollar.svg"
              style={{ display: 'inline-block', width: 200, padding: 20 }}
            />
            <p>абитуриент</p>
          </h2>
          <Form className="personal-registration-form" onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('fio', {
                rules: [{ required: true, message: 'Укажите ФИО!' }],
              })(
                <Input prefix={<Icon type="user" className="input__icon--gray" />} placeholder="Иванов Иван Иванович" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('position', {
                rules: [{ required: true, message: 'Укажите должность!' }],
              })(
                <Input prefix={<Icon type="idcard" className="input__icon--gray" />} placeholder="должность" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Укажите email!' }],
              })(
                <Input prefix={<Icon type="mail" className="input__icon--gray" />} placeholder="example@mail.com" />,
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                зарегистрироватся
              </Button>
            </FormItem>
            <FormItem>
              {getFieldDecorator('accept', {
                valuePropName: 'checked',
              })(
                <Checkbox>Я согласен на обработку персональных данных</Checkbox>,
              )}
            </FormItem>
          </Form>
        </Content>
    );
  }
}

const WrappedPersonalRegistration = Form.create()(PersonalRegistration as any);

export default WrappedPersonalRegistration;
