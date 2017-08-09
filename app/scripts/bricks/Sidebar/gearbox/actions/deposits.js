import { asyncAction, syncAction } from 'helpers/actions';

export const clearDepositsList = syncAction('Clear deposits list.')();
export const getDepositsList = asyncAction('Get list of deposits.')({
  INIT: (clientId) => ({ clientId }),
});

export const selectDeposit = syncAction('Select deposit main info.')({
  START: (depositData) => ({ depositData }),
});
export const clearDeposit = syncAction('Clear deposit main info + history')();

export default {
  getDepositsList,
  clearDepositsList,
  selectDeposit,
  clearDeposit,
};
