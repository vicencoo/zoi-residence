// import { useState } from "react";
// import { APARTMENT_STAIRS } from "../../data/apartments";
// import { useTranslation } from "react-i18next";

// export const useApartments = () => {
//   const { t } = useTranslation("apartments");
//   const apartmentStairs = APARTMENT_STAIRS(t);

//   const [selectedStair, setSelectedStair] = useState(apartmentStairs[0]);
//   const [animKey, setAnimKey] = useState(0);

//   const handleStairSelect = (stair) => {
//     setSelectedStair(stair);
//     setAnimKey((k) => k + 1);
//   };

//   return {
//     apartmentStairs,
//     selectedStair,
//     animKey,
//     handleStairSelect,
//   };
// };

import { useMemo, useState } from "react";
import { APARTMENT_STAIRS } from "../../data/apartments";
import { useTranslation } from "react-i18next";

export const useApartments = () => {
  const { t, i18n } = useTranslation("apartments");

  const apartmentStairs = useMemo(
    () => APARTMENT_STAIRS(t),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, i18n.language],
  );

  const [selectedStairId, setSelectedStairId] = useState(apartmentStairs[0].id);
  const [animKey, setAnimKey] = useState(0);

  const selectedStair =
    apartmentStairs.find((stair) => stair.id === selectedStairId) ||
    apartmentStairs[0];

  const handleStairSelect = (stair) => {
    setSelectedStairId(stair.id);
    setAnimKey((k) => k + 1);
  };

  return {
    apartmentStairs,
    selectedStair,
    animKey,
    handleStairSelect,
  };
};
