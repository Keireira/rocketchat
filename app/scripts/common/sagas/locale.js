import locales from 'locales';
import { canSetLang } from 'helpers';
import { changeLocale } from 'actions/locale';

import { takeLatest, all } from 'redux-saga/effects';

function* changeLocaleByUser(action) {
  const locale = action.payload;
  const isSetted = canSetLang(locale);
  if (isSetted === false) return null;

  yield all([
    locales.setLanguage(locale),
    localStorage.setItem('current_locale', locale),
  ]);
};

export default function* watchLocale() {
  yield all([
    takeLatest([changeLocale['START']], changeLocaleByUser),
  ]);
};
