/*!
 * Vendor
 */

import * as React from 'react';
import Head from 'next/head';

/*!
 * Components
 */

import {
  Container,
  Header,
  HeaderTitle,
} from '../styled/common';

/*!
 * Expo
 */

export default ({ title, description, settings }) => (
  <Header>
    <Head>
      <title>{ title ? title : 'Все рестораны Челябинска' }</title>
      <meta
        name="description"
        content={
          description
          ? description
          : `Портал restory74.ru — содержит самую актуальную информацию о ресторанах и заведениях для любого повода.`
        }
      />
    </Head>
    <Container>
      <HeaderTitle>рестораны челябинска</HeaderTitle>
    </Container>
  </Header>
);
