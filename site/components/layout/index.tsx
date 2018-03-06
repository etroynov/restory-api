/*!
 * Vendor
 */

import * as React from 'react';

/*!
 * Components
 */

import Header from '../common/Header';
import Footer from '../common/Footer';

/*!
 * Expo
 */


const Site = ({ title, description, settings, children }: ILayout) => (
  <div>
    <Header title={title} description={description} settings={settings} />
    <div>
      {children}
    </div>
    <Footer settings={settings} />
  </div>
);

export default Site;
