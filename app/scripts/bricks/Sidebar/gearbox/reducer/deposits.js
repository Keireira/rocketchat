import {
  initHandler,
  failHandler,
  notModifiedHandler,
} from 'helpers/reducerHandlers';
import { sidebarAct } from 'actions';

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

export const getDepositDataDone = (state, payload) => ({
  ...state,
  error: null,
  isFetching: false,
  deposit: {
    ...state.deposit,
    ...payload.deposit,
    history: payload.history,
  },
});

const reducer = {
  // Inits
  [sidebarAct.getDepositsList['INIT']]: initHandler,
  [sidebarAct.getDepositData['INIT']]: initHandler,

  // Fails
  [sidebarAct.getDepositsList['FAIL']]: failHandler,
  [sidebarAct.getDepositData['FAIL']]: failHandler,

  // 304's
  [sidebarAct.getDepositsList['NOT_MODIFIED']]: notModifiedHandler,
  [sidebarAct.getDepositData['NOT_MODIFIED']]: notModifiedHandler,

  // 200's
  [sidebarAct.getDepositsList['DONE']]: getDepositsListDone,
  [sidebarAct.getDepositData['DONE']]: getDepositDataDone,

  // Sync actions
  [sidebarAct.clearDepositsList['FINISH']]: clearDepositsListFinish,
  [sidebarAct.selectDeposit['FINISH']]: selectDepositFinish,
  [sidebarAct.clearDeposit['FINISH']]: clearDepositFinish,
};

export default reducer;
