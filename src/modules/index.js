import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import routes from 'constants/routes';
import Test from './test/containers/Test/Test';

import { store } from './store';
import { history } from './history';

import '../i18n';

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path={routes.root} exact component={Test} />
      <Route path={routes.test} component={Test} />
    </ConnectedRouter>
  </Provider>
);
