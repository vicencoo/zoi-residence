import { useState } from "react";

export const useHome = () => {
  const [active, setActive] = useState(0);
  const isMobile = window.innerWidth < 768;

  const handleChangeActive = (index) => {
    setActive(index);
  };

  return { active, handleChangeActive, isMobile };
};
