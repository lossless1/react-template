import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { routerMiddleware } from './history';

const isDev = process.env.NODE_ENV === 'development';

const composeEnhancers = isDev
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware)
  )
);

sagaMiddleware.run(rootSaga);
