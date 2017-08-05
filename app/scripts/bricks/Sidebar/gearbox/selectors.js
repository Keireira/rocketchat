import { createSelector } from 'reselect';

const getClientAccounts = (state) => state.sidebar.accounts;
export const makeGetClientAccounts = () => createSelector(
  [getClientAccounts],
  (carousel) => carousel
);

export default {
  makeGetClientAccounts,
};
