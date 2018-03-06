/*!
 * Vendor
 */

import * as React from 'react';
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

  font: normal 22px Verdana, sans-serif;
  text-transform: uppercase;
`;

/*!
 * Expo
 */

export default ({ title, description, settings }) => (
  <Header>
    <Container>
      <Title>рестораны челябинска</Title>
    </Container>
  </Header>
);
