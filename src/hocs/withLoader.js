import React from 'react';
import { Spinner } from '@blueprintjs/core';

const withLoader = (Component, loaderProps = {}) =>
  function WithLoader({ fetching, ...props }) {
    return fetching ? (
      <Spinner {...loaderProps} />
    ) : (
      <Component {...props} fetching={fetching} />
    );
  };

export default withLoader;
