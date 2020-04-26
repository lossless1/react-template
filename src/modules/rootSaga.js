import { all } from 'redux-saga/effects';
import test from 'modules/test/sagas/test';

export function* rootSaga() {
  yield all([test()]);
}
