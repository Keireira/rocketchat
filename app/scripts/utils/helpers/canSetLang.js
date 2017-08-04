import locales from 'locales';

const canSetLang = (locale) => {
  const isCurrent = locales.getLanguage() === locale;
  const isAvailable = locales.getAvailableLanguages().includes(locale);

  return (isAvailable && isCurrent === false);
};

export default canSetLang;
