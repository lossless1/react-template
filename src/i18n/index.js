import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translation } from './en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation,
    },
    fallbackLng: 'en',
  },
  lng: 'en',
});

export { i18n };
