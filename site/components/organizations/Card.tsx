/*!
 * Vendor
 */

import * as React from 'react';
import Link from 'next/link';

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
    <Link as={name.toLowerCase().replace(/\s/g, '-')} href={{ pathname: '/organization', query: { slug: name } }}>
      <a>
        <ThumbContainer>
          <Thumb src="/static/img/no-image.svg" alt={name} />
          <ThumbTitle>{name}</ThumbTitle>
        </ThumbContainer>
        <CardContent dangerouslySetInnerHTML={{ __html: `${content.slice(0, 120)}...` }} />
      </a>
    </Link>
  </Card>
);

export default Organization;
