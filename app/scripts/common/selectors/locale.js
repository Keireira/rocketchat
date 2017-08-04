import { createSelector } from 'reselect';

const getCurrentLocale = (state) => state.locale.currentLocale;
export const makeGetCurrentLocale = () => createSelector(
  [getCurrentLocale],
  (locale) => locale
);

export default {
  makeGetCurrentLocale,
};
