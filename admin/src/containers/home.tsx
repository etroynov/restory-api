/*!
 * Vendor
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

/*!
 * Components
 */

import Dashboard from './../components/layout';

/*!
 * Expo
 */

const Home = () => (
  <Dashboard>
    <Helmet>
      <title>Панель управления</title>
    </Helmet>
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
      <h1 style={{ margin: 0 }}>Главная</h1>
    </header>
  </Dashboard>
);

export default Home;
