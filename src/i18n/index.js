import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translation as en } from './en';
import LS from 'utils/ls';

const EN = 'en';

export const ACCESSED_LANGUAGES = [EN];

const getDefaultLanguage = () => {
  const language = LS.getLanguage();
  if (language && ACCESSED_LANGUAGES.includes(language)) {
    return language;
  }
  return EN;
};

const defaultLanguage = getDefaultLanguage();

i18n.use(initReactI18next).init({
  resources: {
    [EN]: {
      translation: en,
    },
    fallbackLng: EN,
  },
  lng: defaultLanguage,
});

export { i18n, EN };
