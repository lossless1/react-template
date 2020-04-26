import React, { useEffect } from 'react';

const withOnMount = Component =>
  function WithOnMount({ onMount, ...props }) {
    useEffect(() => {
      onMount();
    }, []);
    return <Component {...props} />;
  };

export default withOnMount;
