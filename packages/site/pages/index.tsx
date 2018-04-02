/*!
 * Vendor
 */

import axios from 'axios';

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
    axios.get('http://localhost:8081/categories'),
    axios.get('http://localhost:8081/organizations'),
    axios.get('http://localhost:8081/settings'),
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
