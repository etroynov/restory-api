/**
 * Dependencies
 */

import * as React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Checkbox, Modal } from 'antd';

import { login } from './../../actions/userActions';

/*!
 * Expo
 */

const { Content } = Layout;
const FormItem = Form.Item;

class LoginForm extends React.Component<any, any> {
  componentWillMount() {
    const { user } = this.props;

    if (user.isAuthenticated) {
      location.pathname = '/';
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        this.props.login(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Content style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        width: 300,
        height: 500,
      }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Авторизация</title>
        </Helmet>
        <h2 style={{ margin: 0, textAlign: 'center', textTransform: 'uppercase' }}>авторизация</h2>
        <h3 style={{ fontSize: 15, textAlign: 'center' }}>( 0.71.4 )</h3>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Укажите имя пользователя!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="имя пользователя" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Укажите пароль!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="пароль" />,
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
              войти
            </Button>
            или <Link to="/auth/registration">зарегистрироваться!</Link>
          </FormItem>
        </Form>
      </Content>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm as any);

const mapDispatchToProps = ({ user }) => ({ user });

export default connect(
  mapDispatchToProps,
  { login },
)(WrappedLoginForm as any);
