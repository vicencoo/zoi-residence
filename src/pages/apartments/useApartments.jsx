import { useState } from "react";
import { apartmentStairs } from "../../data/apartments";

export const useApartments = () => {
  const [selectedStair, setSelectedStair] = useState(apartmentStairs[0]);
  const [animKey, setAnimKey] = useState(0);

  const handleStairSelect = (stair) => {
    setSelectedStair(stair);
    setAnimKey((k) => k + 1);
  };
  return { selectedStair, animKey, handleStairSelect };
};
