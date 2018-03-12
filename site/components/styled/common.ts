/*!
 * Vendor
 */

import styled from 'styled-components';

/*!
 * Expo
 */

export const Page = styled.div`
  margin: 0;
  padding: 0;
  font: normal 15px/1.5 'Roboto', Verdana, sans-serif;
  background-color: #f6f5f3;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 10px;
`;

export const Container = styled.section`
  max-width: 1240px;
  min-width: 240px;

  margin-left: auto;
  margin-right: auto;
`;

/*!
 * Header
 */

export const Header = styled.header`
  height: 70px;

  margin-bottom: 20px;
  
  border-bottom: 1px solid #eee;
  background-color: #fff;
`;

export const HeaderTitle = styled.span`
  display: inline-block;
  padding: 22px 0;

  font: normal 22px Helvetica, "Helvetica Neue", sans-serif;
  text-transform: uppercase;
`;

/*!
 * Content
 */

export const Paragraph = styled.section`
  font: normal 22px Helvetica, "Helvetica Neue", sans-serif;
`;