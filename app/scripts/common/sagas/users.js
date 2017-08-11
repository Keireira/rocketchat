import { takeLatest, all, put } from 'redux-saga/effects';
import { selectClient, clearClient } from 'actions/users';

function* selectClientSaga(action) {
  yield all([
    put(selectClient['FINISH'](action.payload)),
    yield window.localStorage.setItem('lastClient', JSON.stringify(action.payload)),
  ]);
};

function* clearClientSaga() {
  yield all([
    put(clearClient['FINISH']()),
    window.localStorage.setItem('lastClient', JSON.stringify({})),
  ]);
};

export default function* watchLocale() {
  yield all([
    takeLatest([selectClient['START']], selectClientSaga),
    takeLatest([clearClient['START']], clearClientSaga),
  ]);
};
