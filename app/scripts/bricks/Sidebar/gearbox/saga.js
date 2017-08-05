import api from 'api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getClientAccounts, clearClientAccounts } from './actions';

function* getClientAccountsData(action) {
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

function* clearClientAccountsData() {
  yield put(clearClientAccounts['FINISH']());
};

export default function* watchCarousel() {
  yield all([
    takeLatest([getClientAccounts['INIT']], getClientAccountsData),
    takeLatest([clearClientAccounts['START']], clearClientAccountsData),
  ]);
};
