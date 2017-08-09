import { createReducer } from 'redux-act';
import {
  getAccountData,
  getAccountsList,
  clearAccountsList,
  clearAccount,
  selectAccount,
} from './actions/accounts';

const initialState = {
  isFetching: false,
  error: null,
  accounts: [],
  deposits: [],
  account: {
    history: [],
  },
  deposit: null,
};

// default handlers
const defaultInitHandler = (state) => ({
  ...state,
  isFetching: true,
  error: null,
});

const defaultFailHandler = (state, error) => ({
  ...state,
  isFetching: false,
  error,
});

const defaultNotModifiedHandler = (state) => ({
  ...state,
  isFetching: false,
  error: null,
});

// Get all client accounts
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
const getAccountDataDone = (state, payload) => {
  return {
    ...state,
    error: null,
    isFetching: false,
    account: {
      ...state.account,
      ...payload.account,
      history: payload.history,
    },
  };
};

const reducer = createReducer({
  // Inits
  [getAccountsList['INIT']]: defaultInitHandler,
  [getAccountData['INIT']]: defaultInitHandler,

  // Fails
  [getAccountsList['FAIL']]: defaultFailHandler,
  [getAccountData['FAIL']]: defaultFailHandler,

  // 304's
  [getAccountsList['NOT_MODIFIED']]: defaultNotModifiedHandler,
  [getAccountData['NOT_MODIFIED']]: defaultNotModifiedHandler,

  // 200's
  [getAccountsList['DONE']]: getAccountsListDone,
  [getAccountData['DONE']]: getAccountDataDone,

  // Sync actions
  [clearAccountsList['FINISH']]: clearAccountsListFinish,
  [selectAccount['FINISH']]: selectAccountFinish,
  [clearAccount['FINISH']]: clearAccountFinish,
}, initialState);

export default reducer;
