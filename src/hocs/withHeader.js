import React from 'react';
// import Icon, { ICON_NAMES } from 'components/Icon';
import 'components/Footer/Footer.scss';
import { withTranslation } from 'react-i18next';
import Header from 'components/Header/Header';

export default Component =>
  withTranslation()(({ ...props }) => (
    <>
      <Header {...props} />
      <Component {...props} />
    </>
  ));
