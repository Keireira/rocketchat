import { asyncAction, syncAction } from 'helpers/actions';

const clientAccountsPayload = ({
  INIT: (clientId) => ({ clientId }),
  DONE: (data) => (data),
});

export const getClientAccounts = asyncAction('Get data about client\'s accounts')(clientAccountsPayload);
export const clearClientAccounts = syncAction('Clear accounts data.')();

const selectAccountPayload = ({
  START: (accountData) => (accountData),
});
export const selectAccount = syncAction('Select account for show detail info.')(selectAccountPayload);
export const clearAccount = syncAction('Clear account detail info')();

export default {
  getClientAccounts,
  clearClientAccounts,

  selectAccount,
  clearAccount,
};
