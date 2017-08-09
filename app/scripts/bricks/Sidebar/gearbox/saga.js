import api from 'api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getAccountData,
  getAccountsList,
  clearAccountsList,
  clearAccount,
  selectAccount,
} from './actions/accounts';

function* getAccountsListSaga(action) {
  const { clientId } = action.payload;

  try {
    const data = yield call(api.getAccountsList, clientId);

    switch (data.status) {
      case 200: yield put(getAccountsList['DONE'](data.data)); break;
      case 304: yield put(getAccountsList['NOT_MODIFIED']()); break;
      default: yield put(getAccountsList['FAIL']('Can\'t load a data.'));
    }
  } catch (error) {
    yield put(getAccountsList['FAIL'](error));
  }
};

function* selectAccountSaga(action) {
  const { accountData } = action.payload;
  yield put(selectAccount['FINISH'](accountData));
};

function* clearAccountsListSaga() {
  yield put(clearAccountsList['FINISH']());
};

function* clearAccountSaga() {
  yield put(clearAccount['FINISH']());
};

function* getAccountDataSaga({ payload }) {
  try {
    const data = yield call(api.getAccount, payload);

    switch (data.status) {
      case 200: yield put(getAccountData['DONE'](data.data)); break;
      case 304: yield put(getAccountData['NOT_MODIFIED']()); break;
      default: yield put(getAccountData['FAIL']('Can\'t load a data.'));
    }
  } catch (error) {
    yield put(getAccountData['FAIL'](error));
  }
};

export default function* watchCarousel() {
  yield all([
    takeLatest([getAccountsList['INIT']], getAccountsListSaga),
    takeLatest([clearAccountsList['START']], clearAccountsListSaga),
    takeLatest([selectAccount['START']], selectAccountSaga),
    takeLatest([clearAccount['START']], clearAccountSaga),
    takeLatest([getAccountData['INIT']], getAccountDataSaga),
  ]);
};
