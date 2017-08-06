import api from 'api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getClientAccounts,
  clearClientAccounts,
  selectAccount,
  clearAccount,
} from './actions';

function* getClientAccountsSaga(action) {
  const { clientId } = action.payload;

  try {
    const data = yield call(api.getClientAccounts, clientId);

    switch (data.status) {
      case 200: yield put(getClientAccounts['DONE'](data.data)); break;
      case 304: yield put(getClientAccounts['NOT_MODIFIED']()); break;
      default: yield put(getClientAccounts['FAIL']('Can\'t load a data.'));
    }
  } catch (error) {
    yield put(getClientAccounts['FAIL'](error));
  }
};

function* clearClientAccountsSaga() {
  yield put(clearClientAccounts['FINISH']());
};


function* selectAccountSaga(action) {
  yield put(selectAccount['FINISH'](action.payload));
};

function* clearAccountSaga() {
  yield put(clearAccount['FINISH']());
};


export default function* watchCarousel() {
  yield all([
    takeLatest([getClientAccounts['INIT']], getClientAccountsSaga),
    takeLatest([clearClientAccounts['START']], clearClientAccountsSaga),

    takeLatest([selectAccount['START']], selectAccountSaga),
    takeLatest([clearAccount['START']], clearAccountSaga),
  ]);
};
