import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import sqCommon from "./locales/sq/common.json";
import enCommon from "./locales/en/common.json";
import sqHome from "./locales/sq/home.json";
import enHome from "./locales/en/home.json";
import sqResidence from "./locales/sq/residence.json";
import enResidence from "./locales/en/residence.json";
import sqVillas from "./locales/sq/villas.json";
import enVillas from "./locales/en/villas.json";
import sqViewVilla from "./locales/sq/viewVilla.json";
import enViewVilla from "./locales/en/viewVilla.json";
import sqApartments from "./locales/sq/apartments.json";
import enApartments from "./locales/en/apartments.json";
import sqViewApartment from "./locales/sq/viewApartment.json";
import enViewApartment from "./locales/en/viewApartment.json";
import sqParking from "./locales/sq/parking.json";
import enParking from "./locales/en/parking.json";
import sqContact from "./locales/sq/contact.json";
import enContact from "./locales/en/contact.json";

const savedLanguage = localStorage.getItem("language") || "sq";

i18n.use(initReactI18next).init({
  resources: {
    sq: {
      common: sqCommon,
      home: sqHome,
      residence: sqResidence,
      villas: sqVillas,
      viewVilla: sqViewVilla,
      apartments: sqApartments,
      viewApartment: sqViewApartment,
      parking: sqParking,
      contact: sqContact,
    },
    en: {
      common: enCommon,
      home: enHome,
      residence: enResidence,
      villas: enVillas,
      viewVilla: enViewVilla,
      apartments: enApartments,
      viewApartment: enViewApartment,
      parking: enParking,
      contact: enContact,
    },
  },
  lng: savedLanguage,
  fallbackLng: "sq",
  ns: [
    "common",
    "home",
    "residence",
    "villas",
    "viewVilla",
    "apartments",
    "viewApartment",
    "parking",
    "contact",
  ],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
