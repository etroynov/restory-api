/*!
 * Vendor
 */

import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';


/*!
 * Components
 */

import Container from './Container';

const Header = styled.header`
  height: 70px;

  margin-bottom: 20px;
  
  border-bottom: 1px solid #eee;
  background-color: #fff;
`;

const Title = styled.span`
  display: inline-block;
  padding: 22px 0;

  font: normal 22px Helvetica, "Helvetica Neue", sans-serif;
  text-transform: uppercase;
`;

/*!
 * Expo
 */

export default ({ title, description, settings }) => (
  <Header>
    <Head>
      <title>{ title ? title : 'Все рестораны Челябинска' }</title>
      <meta name="description" content={ description ? description : `Портал restory74.ru — содержит самую актуальную информацию о ресторанах и заведениях для любого повода.`} />
    </Head>
    <Container>
      <Title>рестораны челябинска</Title>
    </Container>
  </Header>
);
