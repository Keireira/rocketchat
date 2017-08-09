import { createSelector } from 'reselect';

const getAccountsList = (state) => state.sidebar.accounts;
export const makegetAccountsList = () => createSelector(
  [getAccountsList],
  (accounts) => accounts
);

const getAccountData = (state) => state.sidebar.account;
export const makeGetAccountData = () => createSelector(
  [getAccountData],
  (account) => account
);

const getSelectedDeposit = (state) => state.sidebar.deposit;
export const makeGetSelectedDeposit = () => createSelector(
  [getSelectedDeposit],
  (deposit) => deposit
);

const getDepositsList = (state) => state.sidebar.deposits;
export const makeGetDepositsList = () => createSelector(
  [getDepositsList],
  (deposits) => deposits
);

export default {
  makegetAccountsList,
  makeGetAccountData,
  makeGetSelectedDeposit,
  makeGetDepositsList,
};
