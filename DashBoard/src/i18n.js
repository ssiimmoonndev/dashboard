import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import commonEn from "./locales/en.json";
import commonFr from "./locales/fr.json";
import commonEs from "./locales/es.json";

const RESOURCES = {
  en: { common: commonEn },
  fr: { common: commonFr },
  es: { common: commonEs },
};

const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

export const defaultNS = "common";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: DETECTION_OPTIONS,
    resources: RESOURCES,
    defaultNS,
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
  });

export default i18n;