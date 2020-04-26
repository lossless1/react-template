import React from 'react';
import routes from 'constants/routes';

const withRedirectToRegistration = Component => props => {
  const { profile, history } = props;
  const notFullProfile = Object.values(profile).some(val => !val);
  if (notFullProfile) {
    history.push(routes.registration);
    return null;
  }
  return <Component {...props} />;
};
export default withRedirectToRegistration;
