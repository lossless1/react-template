import { combineReducers } from 'redux';
import { routerReducer as router } from './history';

export const rootReducer = combineReducers({
  router,
});
