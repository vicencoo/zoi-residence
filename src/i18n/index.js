import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import sqCommon from "./locales/sq/common.json";
import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import sqHome from "./locales/sq/home.json";

const savedLanguage = localStorage.getItem("language") || "sq";

i18n.use(initReactI18next).init({
  resources: {
    sq: {
      common: sqCommon,
      home: sqHome,
    },
    en: {
      common: enCommon,
      home: enHome,
    },
  },
  lng: savedLanguage,
  fallbackLng: "sq",
  ns: ["common", "home"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
