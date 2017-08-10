// Get all client accounts
export const getAccountsListDone = (state, { accounts }) => ({
  ...state,
  isFetching: false,
  error: null,
  accounts,
});

// Remove data about client accounts
export const clearAccountsListFinish = (state) => ({
  ...state,
  error: null,
  accounts: [],
});

// Choose some account from accounts list
export const selectAccountFinish = (state, account) => ({
  ...state,
  account,
});

// Remove data abount selected account
export const clearAccountFinish = (state) => ({
  ...state,
  account: {
    history: [],
  },
});

// Retrieve account data from server
export const getAccountDataDone = (state, payload) => ({
  ...state,
  error: null,
  isFetching: false,
  account: {
    ...state.account,
    ...payload.account,
    history: payload.history,
  },
});

export default {
  clearAccountFinish,
  getAccountDataDone,
  getAccountsListDone,
  selectAccountFinish,
  clearAccountsListFinish,
};
