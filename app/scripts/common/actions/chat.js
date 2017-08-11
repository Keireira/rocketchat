import { syncAction } from 'helpers/actions';

export const sendOperationToChat = syncAction('Send operation in chat.')();
export const clearSelectedOperation = syncAction('Clear selected operation')();

export default {
  sendOperationToChat,
  clearSelectedOperation,
};
