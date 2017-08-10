import { asyncAction, syncAction } from 'helpers/actions';

export const clearDepositsList = syncAction('Clear deposits list.')();
export const getDepositsList = asyncAction('Get list of deposits.')({
  INIT: (clientId) => ({ clientId }),
});

export const selectDeposit = syncAction('Select deposit main info.')({
  START: (depositData) => ({ depositData }),
});
export const clearDeposit = syncAction('Clear deposit main info + history')();

export const getDepositData = asyncAction('Get deposit history (+ main info).')({
  INIT: (clientId, productId, getDeposit) => ({ clientId, productId, getDeposit }),
});

export default {
  getDepositsList,
  clearDepositsList,
  getDepositData,
  selectDeposit,
  clearDeposit,
};
