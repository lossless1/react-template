import { ICON_NAMES } from './constants';
import PropTypes from 'prop-types';
import { ReactComponent as testIcon } from './icons/test-icon.svg';
import React from 'react';

const nameToFile = {
  [ICON_NAMES.TEST_ICON]: testIcon,
};

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
