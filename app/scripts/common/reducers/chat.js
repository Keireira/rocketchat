import { createReducer } from 'redux-act';
import { sendOperationToChat, clearSelectedOperation } from 'actions/chat';

const initialState = {
  selectedOperation: {},
};

const sendOperationToChatFinish = (state, selectedOperation) => ({
  ...state,
  selectedOperation,
});

const clearSelectedOperationFinish = (state) => ({
  ...state,
  selectedOperation: {},
});

const reducer = createReducer({
  [sendOperationToChat['FINISH']]: sendOperationToChatFinish,
  [clearSelectedOperation['FINISH']]: clearSelectedOperationFinish,
}, initialState);

export default reducer;
