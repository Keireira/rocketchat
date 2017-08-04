import { all } from 'redux-saga/effects';

import watchLocale from './locale';

export default function* rootSaga() {
  yield all([
    watchLocale(),
  ]);
};
