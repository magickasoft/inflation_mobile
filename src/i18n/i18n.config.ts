import 'intl-pluralrules';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {resources} from './i18n.options';
const {languageDetectorPlugin} = require('./languageDetectorPlugin');

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    fallbackLng: {
      de: ['en'],
      fr: ['en'],
      it: ['en'],
      th: ['en'],
      zh: ['en'],
      'zh-Hans': ['zh'],
      es: ['en'],
      default: ['en'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
