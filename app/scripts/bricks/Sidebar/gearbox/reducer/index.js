import { createReducer } from 'redux-act';
import { sidebarAct } from 'actions';
import { defaultHd, accountsHd, depositsHd } from './handlers';

const initialState = {
  isFetching: false,
  error: null,
  accounts: [],
  deposits: [],
  account: {
    history: [],
  },
  deposit: {
    history: [],
  },
};

const reducer = createReducer({
  // Inits
  [sidebarAct.getAccountsList['INIT']]: defaultHd.initHandler,
  [sidebarAct.getAccountData['INIT']]: defaultHd.initHandler,

  [sidebarAct.getDepositsList['INIT']]: defaultHd.initHandler,
  [sidebarAct.getDepositData['INIT']]: defaultHd.initHandler,

  // Fails
  [sidebarAct.getAccountsList['FAIL']]: defaultHd.failHandler,
  [sidebarAct.getAccountData['FAIL']]: defaultHd.failHandler,

  [sidebarAct.getDepositsList['FAIL']]: defaultHd.initHandler,
  [sidebarAct.getDepositData['FAIL']]: defaultHd.initHandler,

  // 304's
  [sidebarAct.getAccountsList['NOT_MODIFIED']]: defaultHd.notModifiedHandler,
  [sidebarAct.getAccountData['NOT_MODIFIED']]: defaultHd.notModifiedHandler,

  [sidebarAct.getDepositsList['NOT_MODIFIED']]: defaultHd.initHandler,
  [sidebarAct.getDepositData['NOT_MODIFIED']]: defaultHd.initHandler,

  // 200's
  [sidebarAct.getAccountsList['DONE']]: accountsHd.getAccountsListDone,
  [sidebarAct.getAccountData['DONE']]: accountsHd.getAccountDataDone,

  [sidebarAct.getDepositsList['DONE']]: depositsHd.getDepositsListDone,
  [sidebarAct.getDepositData['DONE']]: depositsHd.getDepositDataDone,

  // Sync actions
  [sidebarAct.clearAccountsList['FINISH']]: accountsHd.clearAccountsListFinish,
  [sidebarAct.selectAccount['FINISH']]: accountsHd.selectAccountFinish,
  [sidebarAct.clearAccount['FINISH']]: accountsHd.clearAccountFinish,

  [sidebarAct.clearDepositsList['FINISH']]: depositsHd.clearDepositsListFinish,
  [sidebarAct.selectDeposit['FINISH']]: depositsHd.selectDepositFinish,
  [sidebarAct.clearDeposit['FINISH']]: depositsHd.clearDepositFinish,
}, initialState);

export default reducer;
