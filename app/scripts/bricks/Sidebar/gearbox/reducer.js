import { createReducer } from 'redux-act';
import {
  getClientAccounts,
  clearClientAccounts,
  selectAccount,
  clearAccount,
} from './actions';

const initialState = {
  isFetching: false,
  error: null,
  accounts: [],
  deposits: [],
  account: {},
  deposit: null,
};

const getClientAccountsDone = (state, { accounts }) => ({
  ...state,
  isFetching: false,
  error: null,
  accounts,
});

const getClientAccountsInit = (state) => ({
  ...state,
  isFetching: true,
  error: null,
});

const getClientAccountsFail = (state, error) => ({
  ...state,
  isFetching: false,
  error,
});

const getClientAccounts304 = (state) => ({
  ...state,
  isFetching: false,
  error: null,
});

const clearClientAccountsFinish = (state) => ({
  ...state,
  error: null,
  accounts: [],
});

const selectAccountFinish = (state, account) => ({
  ...state,
  account,
});

const clearAccountFinish = (state) => ({
  ...state,
  account: {},
});

const reducer = createReducer({
  [getClientAccounts['INIT']]: getClientAccountsInit,
  [getClientAccounts['DONE']]: getClientAccountsDone,
  [getClientAccounts['FAIL']]: getClientAccountsFail,
  [getClientAccounts['NOT_MODIFIED']]: getClientAccounts304,

  [clearClientAccounts['FINISH']]: clearClientAccountsFinish,

  [selectAccount['FINISH']]: selectAccountFinish,
  [clearAccount['FINISH']]: clearAccountFinish,
}, initialState);

export default reducer;
