import { asyncAction, syncAction } from 'helpers/actions';

// Account list actions (state.accounts)
export const clearAccountsList = syncAction('Clear accounts list.')();
export const getAccountsList = asyncAction('Get list of client accounts.')({
  INIT: (clientId) => ({ clientId }),
});

// Detailed info about account actions (state.account)
export const selectAccount = syncAction('Select account main info.')({
  START: (accountData) => ({ accountData }),
});

export const getAccountData = asyncAction('Get account history (+ main info).')({
  INIT: (clientId, productId, getAccount) => ({ clientId, productId, getAccount }),
});

export const clearAccount = syncAction('Clear account main info + history')();

export default {
  getAccountsList,
  clearAccountsList,

  clearAccount,
  selectAccount,
  getAccountData,
};
