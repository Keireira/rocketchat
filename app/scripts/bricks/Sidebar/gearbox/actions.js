import { asyncAction, syncAction } from 'helpers/actions';

const clientAccountsPayload = ({
  INIT: (clientId) => ({ clientId }),
  DONE: (data) => (data),
});

export const getClientAccounts = asyncAction('Get data about client\'s accounts')(clientAccountsPayload);
export const clearClientAccounts = syncAction('Clear accounts data.')();

export default {
  getClientAccounts,
  clearClientAccounts,
};
