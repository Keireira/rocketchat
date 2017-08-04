import locales from 'locales';

const getLocale = (lang) => {
  switch (lang) {
    case lang.includes('ru'): return 'ru';
    default: return 'en';
  }
};

const getCurrentLocale = () => {
  const storedLocale = localStorage.getItem('current_locale');
  if (storedLocale) return storedLocale;

  const lang = locales.getInterfaceLanguage();
  const locale = getLocale(lang);

  return locale;
};

export default getCurrentLocale;
