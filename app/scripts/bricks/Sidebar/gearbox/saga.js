import api from 'api';
import { sidebarAct } from 'actions';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* getAccountsListSaga(action) {
  const { clientId } = action.payload;

  try {
    const data = yield call(api.getAccountsList, clientId);

    switch (data.status) {
      case 200: yield put(sidebarAct.getAccountsList['DONE'](data.data)); break;
      case 304: yield put(sidebarAct.getAccountsList['NOT_MODIFIED']()); break;
      default: yield put(sidebarAct.getAccountsList['FAIL'](data));
    }
  } catch (error) {
    yield put(sidebarAct.getAccountsList['FAIL'](error));
  }
};

function* selectAccountSaga(action) {
  const { accountData } = action.payload;
  yield put(sidebarAct.selectAccount['FINISH'](accountData));
};

function* clearAccountsListSaga() {
  yield put(sidebarAct.clearAccountsList['FINISH']());
};

function* clearAccountSaga() {
  yield put(sidebarAct.clearAccount['FINISH']());
};

function* getAccountDataSaga({ payload }) {
  try {
    const data = yield call(api.getAccount, payload);

    switch (data.status) {
      case 200: yield put(sidebarAct.getAccountData['DONE'](data.data)); break;
      case 304: yield put(sidebarAct.getAccountData['NOT_MODIFIED']()); break;
      default: yield put(sidebarAct.getAccountData['FAIL'](data));
    }
  } catch (error) {
    yield put(sidebarAct.getAccountData['FAIL'](error));
  }
};

function* getDepositsListSaga(action) {
  const { clientId } = action.payload;

  try {
    const data = yield call(api.getDepositsList, clientId);

    switch (data.status) {
      case 200: yield put(sidebarAct.getDepositsList['DONE'](data.data)); break;
      case 304: yield put(sidebarAct.getDepositsList['NOT_MODIFIED']()); break;
      default: yield put(sidebarAct.getDepositsList['FAIL'](data));
    }
  } catch (error) {
    yield put(sidebarAct.getDepositsList['FAIL'](error));
  }
};
function* clearDepositsListSaga() {
  yield put(sidebarAct.clearDepositsList['FINISH']());
};

export default function* watchCarousel() {
  yield all([
    takeLatest([sidebarAct.getAccountsList['INIT']], getAccountsListSaga),
    takeLatest([sidebarAct.clearAccountsList['START']], clearAccountsListSaga),
    takeLatest([sidebarAct.selectAccount['START']], selectAccountSaga),
    takeLatest([sidebarAct.clearAccount['START']], clearAccountSaga),
    takeLatest([sidebarAct.getAccountData['INIT']], getAccountDataSaga),

    takeLatest([sidebarAct.getDepositsList['INIT']], getDepositsListSaga),
    takeLatest([sidebarAct.clearDepositsList['START']], clearDepositsListSaga),
  ]);
};
