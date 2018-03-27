/*!
 * Vendor
 */

import { YMInitializer } from 'react-yandex-metrika';

/*!
 * Expo
 */

const Footer = ({ settings }) => (
  <footer className="footer">
    <YMInitializer accounts={[32792405]} options={{ defer: true }} version="2" />
  </footer>
);

export default Footer;
