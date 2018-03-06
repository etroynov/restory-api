/*!
 * Vendor
 */

import * as React from 'react';
import styled from 'styled-components';

/*!
 * Components
 */

const Organization = styled.article`
  display: inline-block;
  min-width: 240px;
  max-width: 320px;

  vertical-align: top;
`;

const OrganizationTitle = styled.h1`
  text-transform: uppercase;
  font-weight: normal;
  font-family: Verdana, sans-serif;
`;

/*!
 * Expos
 */

const OrganizationsItem = ({ name, content }) => (
  <Organization>
    <header>
      <OrganizationTitle>{name}</OrganizationTitle>
    </header>
    <section dangerouslySetInnerHTML={{ __html: content }} />
  </Organization>
);

export default OrganizationsItem;
