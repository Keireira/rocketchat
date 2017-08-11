import { createSelector } from 'reselect';

const getLastClient = (state) => state.users.lastClient;
export const makeGetLastClient = () => createSelector(
  [getLastClient],
  (lastClient) => lastClient
);

const getOperator = (state) => state.users.operator;
export const makeGetOperator = () => createSelector(
  [getOperator],
  (operator) => operator
);

export default {
  makeGetLastClient,
  makeGetOperator,
};
