import { createReducer } from 'redux-act';

const initialState = {
  isFetching: false,
  error: null,
};

const reducer = createReducer({

}, initialState);

export default reducer;
