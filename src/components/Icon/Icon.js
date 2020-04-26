import PropTypes from 'prop-types';

import nameToFile from './files';
import React from 'react';

const Icon = ({ name, ...props }) => {
  const Icon = nameToFile[name];
  if (Icon) {
    return <Icon {...props} />;
  }
  return 'Icon not found';
};

Icon.defaultProps = {
  name: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
