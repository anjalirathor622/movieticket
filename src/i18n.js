import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTrans from './locals/en/translation';
import hiTrans from './locals/hi/translation';

i18n
 
  .use(Backend)
  // detect user language
  
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
 
  .init({
    debug: true,

    resources: {
        en: enTrans,
        hi:hiTrans
      },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;