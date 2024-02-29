//i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: en,
    de: de,
    tr: tr,
  },
});

export default i18n;
