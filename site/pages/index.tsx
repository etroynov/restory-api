/*!
 * Vendor
 */

import axios from 'axios';
import * as React from 'react';

/*!
 * Components
 */

import Layout from '../components/layout';

import Organizations from '../components/organizations';

/*!
 * Expo
 */

const Home = ({ categories, organizations, settings }) => (
  <Layout>
    <Organizations organizations={organizations} />
  </Layout>
);

Home.getInitialProps = async () => {
  const [categoriesRes, organizationsRes, settingsRes] = await Promise.all([
    axios.get('http://api.restory74.ru/categories'),
    axios.get('http://api.restory74.ru/organizations'),
    axios.get('http://api.restory74.ru/settings'),
  ]);

  const settings = {};

  if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
    settingsRes.data.forEach(({ value, slug }) => settings[slug] = value);
  }

  return {
    settings,
    categories: categoriesRes.data,
    organizations: organizationsRes.data,
  };
};

export default Home;
