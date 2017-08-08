import { createReducer } from 'redux-act';
import { selectClient, clearClient } from 'actions/users';

const initialState = {
  lastClient: {},
  operator: {},
};

const selectClientFinish = (state, lastClient) => ({
  ...state,
  lastClient,
});

const clearClientFinish = (state) => ({
  ...state,
  lastClient: {},
});

const reducer = createReducer({
  [selectClient['FINISH']]: selectClientFinish,
  [clearClient['FINISH']]: clearClientFinish,
}, initialState);

export default reducer;
