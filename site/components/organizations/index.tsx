/*!
 * Vendor
 */

import * as React from 'react';

/*!
 * Components
 */

import Card from './Card';

/*!
 * Styled
 */

import { Grid, Container } from '../styled/common';

/*!
 * Expos
 */

const Organizations = ({ organizations }) => (
  <Container>
    <Grid>
      {organizations.map(organization => <Card key={organization._id} {...organization} />)}
    </Grid>
  </Container>
);

export default Organizations;
