/*!
 * Vendor
 */

import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { withState } from 'recompose';
import { Helmet } from 'react-helmet';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

/*!
 * Components
 */

import Profile from './home/profile';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

/*!
 * Declare
 */

declare const require: any;

/*!
 * Expo
 */


const Dashboard = ({ children, title = '', collapsed, onCollapse, user }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Helmet>
      <title>{ title }</title>
    </Helmet>

    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={() => onCollapse(!collapsed)}
      className="sidebar"
    >
      <Profile {...user} />
      <Menu defaultSelectedKeys={['0']} mode="inline">
        <Menu.Item key="0">
          <Link to="/">
              <Icon type="desktop" />
              <span>Главная</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/courses">
              <Icon type="book" />
              <span>Курсы</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/payments">
              <Icon type="wallet" />
              <span>Платежи</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: '16px 0 0 0' }}>
        <Menu mode="horizontal" onClick={() => {
          localStorage.removeItem('jwtToken');
          return location.pathname = '/auth';
        }}>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
              <Icon type="user" />
              {user.fio}
            </span>}
          >
            <Menu.Item key="logout">
              Выйти
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>главная</Breadcrumb.Item>
          <Breadcrumb.Item>{ title !== 'Главная' ? title.toLowerCase() : '' }</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        УЦ "Автор" ©2017 разработанно <a href="http://troinof.ru/portfolio/ucavtor">troinof.ru</a>
      </Footer>
    </Layout>
  </Layout>
);

const mapDispatchToProps = ({ user }) => ({ user });

export default connect(mapDispatchToProps)(withState(
  'collapsed',
  'onCollapse',
  false,
)(Dashboard) as any);
