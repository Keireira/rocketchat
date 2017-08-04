import { createReducer } from 'redux-act';
import { changeLocale } from 'actions/locale';

const initialState = {
  currentLocale: '',
};

const changeLocaleHd = (state, currentLocale) => ({
  ...state, currentLocale,
});

const reducer = createReducer({
  [changeLocale['FINISH']]: changeLocaleHd,
}, initialState);

export default reducer;
