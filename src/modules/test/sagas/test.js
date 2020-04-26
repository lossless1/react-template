import { takeLatest } from 'redux-saga/effects';
import { types } from 'modules/test/reducers/test';

function* test() {
  yield Promise.resolve(123);
}

export default function* sagas() {
  yield takeLatest(types.TEST.REQUEST, test);
}
