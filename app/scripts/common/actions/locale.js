import { syncAction } from 'helpers/actions';

export const changeLocale = syncAction('Locale changing.')();

export default {
  changeLocale,
};
