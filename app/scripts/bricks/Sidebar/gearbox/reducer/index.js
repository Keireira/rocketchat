import { createReducer } from 'redux-act';
import accounts from './accounts';
import deposits from './deposits';

const initialState = {
  isFetching: false,
  error: null,
  accounts: [],
  deposits: [],
  account: {
    history: [],
  },
  deposit: {
    history: [],
  },
};

const reducer = createReducer({
  ...deposits,
  ...accounts,
}, initialState);

export default reducer;
