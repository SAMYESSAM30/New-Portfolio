import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationAR from "./locales/ar.json";

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

i18n
  .use(LanguageDetector) // للكشف عن لغة المتصفح
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // اللغة الافتراضية
    interpolation: { escapeValue: false }, // لأسباب أمنية
  });

// إضافة مستمع لتغيير اللغة
i18n.on("languageChanged", (lng) => {
  // تغيير سمة lang في body
  document.body.setAttribute("lang", lng);
});

export default i18n;
