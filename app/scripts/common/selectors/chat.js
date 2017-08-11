import { createSelector } from 'reselect';

const getSelectedOperation = (state) => state.chat.selectedOperation;
export const makeGetSelectedOperation = () => createSelector(
  [getSelectedOperation],
  (selectedOperation) => selectedOperation
);

export default {
  makeGetSelectedOperation,
};
