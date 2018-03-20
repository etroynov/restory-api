/*!
 * Vendor
 */

import Link from 'next/link';

/*!
 * Components
 */

import {
  Card,
  CardContent,

  Thumb,
  ThumbTitle,
  StyledLink,
  ThumbContainer,
} from '../styled/organization';

/*!
 * Expos
 */

const Organization = ({ name, content, slug }) => (
  <Card>
    <Link as={`/organization/${slug}`} href={{ pathname: '/organization', query: { slug } }} passHref>
      <StyledLink>
        <ThumbContainer>
          <Thumb src="/static/img/no-image.svg" alt={name} />
          <ThumbTitle>{name}</ThumbTitle>
        </ThumbContainer>
        <CardContent
          dangerouslySetInnerHTML={{
            __html: !!content.length
            ? `${content.slice(0, 120)}...`
            : '',
          }} 
        />
      </StyledLink>
    </Link>
  </Card>
);

export default Organization;
