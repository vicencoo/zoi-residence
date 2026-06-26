import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import sqCommon from "./locales/sq/common.json";
import enCommon from "./locales/en/common.json";
import sqHome from "./locales/sq/home.json";
import enHome from "./locales/en/home.json";

const namespaceLoaders = {
  sq: {
    // home: () => import("./locales/sq/home.json"),
    residence: () => import("./locales/sq/residence.json"),
    villas: () => import("./locales/sq/villas.json"),
    viewVilla: () => import("./locales/sq/viewVilla.json"),
    apartments: () => import("./locales/sq/apartments.json"),
    viewApartment: () => import("./locales/sq/viewApartment.json"),
    parking: () => import("./locales/sq/parking.json"),
    contact: () => import("./locales/sq/contact.json"),
  },
  en: {
    // home: () => import("./locales/en/home.json"),
    residence: () => import("./locales/en/residence.json"),
    villas: () => import("./locales/en/villas.json"),
    viewVilla: () => import("./locales/en/viewVilla.json"),
    apartments: () => import("./locales/en/apartments.json"),
    viewApartment: () => import("./locales/en/viewApartment.json"),
    parking: () => import("./locales/en/parking.json"),
    contact: () => import("./locales/en/contact.json"),
  },
};

const lazyLocaleBackend = {
  type: "backend",
  read(language, namespace, callback) {
    const loader = namespaceLoaders[language]?.[namespace];

    if (!loader) {
      callback(new Error(`Missing locale namespace: ${language}/${namespace}`));
      return;
    }

    loader()
      .then((module) => callback(null, module.default ?? module))
      .catch((error) => callback(error));
  },
};

const savedLanguage = localStorage.getItem("language") || "sq";

i18n
  .use(lazyLocaleBackend)
  .use(initReactI18next)
  .init({
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
    ns: ["common"],
    defaultNS: "common",
    fallbackNS: "common",
    partialBundledLanguages: true,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
