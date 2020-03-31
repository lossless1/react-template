import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store } from '../../modules';
import { history } from '../../modules/history';
import Icon from '../Icon';
import { ICON_NAMES } from '../Icon/constants';
import '../../i18n';

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Icon name={ICON_NAMES.TEST_ICON} />
    </ConnectedRouter>
  </Provider>
);
