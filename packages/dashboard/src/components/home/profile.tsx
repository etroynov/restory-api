/*!
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';

/*!
 * Expo
 */

const Profile: React.SFC<IProfile> = ({ fio, position }) => (
  <div className="profile">
    <figure className="profile__img-container">
      <img src="http://ucavtor.ru/static/img/whitecollar.svg" className="profile__img" />
      <figcaption className="profile__img-caption">
        <h3 style={{ margin: 0, textAlign: 'center' }}>{fio}</h3>
        <p>{position}</p>
        <hr className="profile__divider" />
      </figcaption>
    </figure>
  </div>
);

export default Profile;
