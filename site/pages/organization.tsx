/*!
 * Vendor
 */

import axios from 'axios';

/*!
 * Components
 */

import Layout from '../components/layout';
import {
  Container,
} from '../components/styled/common';

/*!
 * Expo
 */

const Organization = ({ categories, organization, settings }) => (
  <Layout>
    <Container>
    <article>
      <header>
        <h1>{organization.name}</h1>
      </header>

      <section dangerouslySetInnerHTML={{ __html: organization.content }} />
      <section>{organization.workTime}</section>
      <section>{organization.services}</section>
    </article>
    </Container>
  </Layout>
);

Organization.getInitialProps = async ({ query: { slug } }) => {
  const [categoriesRes, organizationRes, settingsRes] = await Promise.all([
    axios.get('http://api.restory74.ru/categories'),
    axios.get(`http://api.restory74.ru/organizations/${slug}`),
    axios.get('http://api.restory74.ru/settings'),
  ]);

  const settings = {};

  if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
    settingsRes.data.forEach(({ value, slug }) => settings[slug] = value);
  }

  return {
    settings,
    categories: categoriesRes.data,
    organization: organizationRes.data,
  };
};

export default Organization;
