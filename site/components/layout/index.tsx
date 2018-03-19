/*!
 * Vendor
 */

import * as React from 'react';

/*!
 * Components
 */

import Header from './Header';
import Footer from './Footer';

/*!
 * Styles
 */

import { Page } from '../styled/common';

/*!
 * Expo
 */


const Site = ({ title, description, settings, children }: ILayout) => (
  <Page>
    <Header title={title} description={description} settings={settings} />
    <div>
      {children}
    </div>
    <Footer settings={settings} />
  </Page>
);

export default Site;
