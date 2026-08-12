import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import ar from "./ar.json";

const savedLanguage = localStorage.getItem("language") || "en";

document.documentElement.lang = savedLanguage;
document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;