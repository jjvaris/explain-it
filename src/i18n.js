import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import locales from './locales/locales';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    resources: locales,
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

// helper to get only language instead of language and country, eg. (en-Us -> en).
i18n.lng = () => i18n.language.split('-')[0];

export default i18n;
