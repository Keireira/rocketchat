// Get all client deposits
export const getDepositsListDone = (state, { deposits }) => ({
  ...state,
  isFetching: false,
  error: null,
  deposits,
});

// Remove data about client deposits
export const clearDepositsListFinish = (state) => ({
  ...state,
  error: null,
  deposits: [],
});

export const selectDepositFinish = (state, deposit) => ({
  ...state,
  deposit,
});

export const clearDepositFinish = (state) => ({
  ...state,
  deposit: {
    history: [],
  },
});

export default {
  getDepositsListDone,
  clearDepositsListFinish,
  selectDepositFinish,
  clearDepositFinish,
};
