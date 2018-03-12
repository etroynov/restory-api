/*!
 * Vendor
 */

import * as React from 'react';

/*!
 * Components
 */

import {
  Card,
  CardContent,

  Thumb,
  ThumbTitle,
  ThumbContainer,
} from '../styled/organization';

/*!
 * Expos
 */

const Organization = ({ name, content }) => (
  <Card>
    <ThumbContainer>
      <Thumb src="/static/img/no-image.svg" alt={name} />
      <ThumbTitle>{name}</ThumbTitle>
    </ThumbContainer>
    <CardContent dangerouslySetInnerHTML={{ __html: `${content.slice(0, 120)}...` }} />
  </Card>
);

export default Organization;
