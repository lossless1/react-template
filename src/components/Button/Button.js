import React from 'react';
import { bool, string, func } from 'prop-types';
import './Button.scss';
import { Button as ButtonBP } from '@blueprintjs/core';
import clsx from 'clsx';
import './Button.scss';

const Button = ({ ...props }) => {
  return <ButtonBP {...props} />;
};
Button.propTypes = {
  ...ButtonBP.propTypes,
};
Button.defaultProps = {
  ...ButtonBP.defaultProps,
};
export default Button;
