import React from 'react';
import Footer from 'components/Footer/Footer';
import 'components/Footer/Footer.scss';

const withFooter = Component => ({ ...props }) => (
  <>
    <Component {...props} />
    <Footer {...props} />
  </>
);

export default withFooter;
