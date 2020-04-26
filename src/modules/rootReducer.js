import { combineReducers } from 'redux';
import { routerReducer as router } from './history';
import test, { NAME as TEST_NAME } from './test/reducers/test';

export const rootReducer = combineReducers({
  router,
  [TEST_NAME]: test,
});
