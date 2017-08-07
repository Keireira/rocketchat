import { createSelector } from 'reselect';

const getClientAccounts = (state) => state.sidebar.accounts;
export const makeGetClientAccounts = () => createSelector(
  [getClientAccounts],
  (accounts) => accounts
);

const getAccountData = (state) => state.sidebar.account;
export const makeGetAccountData = () => createSelector(
  [getAccountData],
  (account) => account
);

export default {
  makeGetClientAccounts,
  makeGetAccountData,
};
