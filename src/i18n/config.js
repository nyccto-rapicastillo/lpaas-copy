import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const LANGUAGES = [
  {lang: "en", name: "English"},
  {lang: "es", name: "Español"}
];

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    fallbackLng: 'en',
    resources: LANGUAGES.reduce((prev, curr)=>{ 
        prev[curr.resource || curr.lang] = { translations: require(`../locales/${curr.lang}.json`) };
        return prev;
    }, {}),
    whitelist: LANGUAGES.map((item)=>item.resource || item.lang),
    ns: ['translations'],
    load: 'unspecific',
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
});


i18next.languages = LANGUAGES.map(item=>item.lang);

export default i18next;
