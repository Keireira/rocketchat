import {
  initHandler,
  failHandler,
  notModifiedHandler,
} from 'helpers/reducerHandlers';
import { sidebarAct } from 'actions';

const getAccountsListDone = (state, { accounts }) => ({
  ...state,
  isFetching: false,
  error: null,
  accounts,
});

// Remove data about client accounts
const clearAccountsListFinish = (state) => ({
  ...state,
  error: null,
  accounts: [],
});

// Choose some account from accounts list
const selectAccountFinish = (state, account) => ({
  ...state,
  account,
});

// Remove data abount selected account
const clearAccountFinish = (state) => ({
  ...state,
  account: {
    history: [],
  },
});

// Retrieve account data from server
const getAccountDataDone = (state, payload) => ({
  ...state,
  error: null,
  isFetching: false,
  account: {
    ...state.account,
    ...payload.account,
    history: payload.history,
  },
});

const reducer = {
  // Inits
  [sidebarAct.getAccountsList['INIT']]: initHandler,
  [sidebarAct.getAccountData['INIT']]: initHandler,

  // Fails
  [sidebarAct.getAccountsList['FAIL']]: failHandler,
  [sidebarAct.getAccountData['FAIL']]: failHandler,

  // 304's
  [sidebarAct.getAccountsList['NOT_MODIFIED']]: notModifiedHandler,
  [sidebarAct.getAccountData['NOT_MODIFIED']]: notModifiedHandler,

  // 200's
  [sidebarAct.getAccountsList['DONE']]: getAccountsListDone,
  [sidebarAct.getAccountData['DONE']]: getAccountDataDone,

  // Sync actions
  [sidebarAct.clearAccountsList['FINISH']]: clearAccountsListFinish,
  [sidebarAct.selectAccount['FINISH']]: selectAccountFinish,
  [sidebarAct.clearAccount['FINISH']]: clearAccountFinish,
};

export default reducer;
