import React from 'react';
import Layout from 'components/Layout/Layout';

export default Component =>
  function WithLayout(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
