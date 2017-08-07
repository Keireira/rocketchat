import { takeLatest, all, put } from 'redux-saga/effects';
import { selectClient, clearClient } from 'actions/users';

function* selectClientSaga(action) {
  yield put(selectClient['FINISH'](action.payload));
};

function* clearClientSaga() {
  yield put(clearClient['FINISH']());
};

export default function* watchLocale() {
  yield all([
    takeLatest([selectClient['START']], selectClientSaga),
    takeLatest([clearClient['START']], clearClientSaga),
  ]);
};
