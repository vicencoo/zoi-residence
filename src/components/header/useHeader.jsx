import { useState } from "react";
import i18n from "../../i18n";

export const useHeader = () => {
  const languages = ["sq", "en"];

  const currentLanguage =
    localStorage.getItem("language") || i18n.language || "sq";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(
    languages.includes(currentLanguage) ? currentLanguage : "sq",
  );

  const handleChangeLanguage = (lang) => {
    setSelectedLocale(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };
  return { isOpen, setIsOpen, selectedLocale, handleChangeLanguage };
};
