import React from 'react';
import { object, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Test.scss';

const Test = ({ location, fetching }) => {
  console.log(location);
  console.log(fetching);
  return <div>Test</div>;
};

Test.propTypes = {
  location: object.isRequired,
  fetching: bool.isRequired,
};

Test.defaultProps = {};

export default withRouter(Test);
