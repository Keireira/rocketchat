import { createReducer } from 'redux-act';
import { sidebarAct } from 'actions';
import { defaultHd, accountsHd } from './handlers';

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

  // Fails
  [sidebarAct.getAccountsList['FAIL']]: defaultHd.failHandler,
  [sidebarAct.getAccountData['FAIL']]: defaultHd.failHandler,

  // 304's
  [sidebarAct.getAccountsList['NOT_MODIFIED']]: defaultHd.notModifiedHandler,
  [sidebarAct.getAccountData['NOT_MODIFIED']]: defaultHd.notModifiedHandler,

  // 200's
  [sidebarAct.getAccountsList['DONE']]: accountsHd.getAccountsListDone,
  [sidebarAct.getAccountData['DONE']]: accountsHd.getAccountDataDone,

  // Sync actions
  [sidebarAct.clearAccountsList['FINISH']]: accountsHd.clearAccountsListFinish,
  [sidebarAct.selectAccount['FINISH']]: accountsHd.selectAccountFinish,
  [sidebarAct.clearAccount['FINISH']]: accountsHd.clearAccountFinish,
}, initialState);

export default reducer;
