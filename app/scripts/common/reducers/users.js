import { createReducer } from 'redux-act';
import { selectClient, clearClient } from 'actions/users';

const initialState = {
  client: {},
  operator: {},
};

const selectClientFinish = (state, payload) => ({
  ...state,
  client: payload,
});

const clearClientFinish = (state) => ({
  ...state,
  client: {},
});

const reducer = createReducer({
  [selectClient['FINISH']]: selectClientFinish,
  [clearClient['FINISH']]: clearClientFinish,
}, initialState);

export default reducer;
