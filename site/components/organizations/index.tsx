/*!
 * Vendor
 */

import * as React from 'react';

/*!
 * Components
 */

import Item from './Item';
import Container from '../common/Container';

/*!
 * Expos
 */

const Organizations = ({ organizations }) => (
  <section className="organizations">
    <Container>
      {organizations.map(organization => <Item key={organization._id} {...organization} />)}
    </Container>
  </section>
);

export default Organizations;
