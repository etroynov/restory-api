/*!
 * Vendor
 */

import { createAction } from 'redux-act';

/*!
 * Expo
 */

/**
 * SELECT
 */

export const menuSelectItem: any = createAction('MENU_SELECT_ITEM');

export const handleMenuSelectItem = data => dispatch => dispatch(menuSelectItem(data));
