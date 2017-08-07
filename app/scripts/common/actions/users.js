import { syncAction } from 'helpers/actions';

export const selectClient = syncAction('Select client.')();
export const clearClient = syncAction('Clear client data.')();

export default {
  selectClient,
  clearClient,
};
