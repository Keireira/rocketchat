import { asyncAction, syncAction } from 'helpers/actions';

export const clearDepositsList = syncAction('Clear deposits list.')();
export const getDepositsList = asyncAction('Get list of deposits.')({
  INIT: (clientId) => ({ clientId }),
});

export default {
  getDepositsList,
  clearDepositsList,
};
