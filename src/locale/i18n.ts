import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

//文字檔
import zh from "./zh/index.ts"; //繁體中文
import en from "./en/index.ts"; //英語

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "zh",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
