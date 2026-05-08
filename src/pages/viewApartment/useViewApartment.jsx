import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { apartmentStairs } from "../../data/apartments";

export const useViewApartment = () => {
  const { stairSlug, unitSlug } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  const handleChangeImage = (image) => setActiveImage(image);

  const apartment = useMemo(() => {
    const stair = apartmentStairs.find((item) => item.slug === stairSlug);
    const unit = stair?.units.find((item) => item.slug === unitSlug);

    if (!stair || !unit) return null;

    return {
      stair,
      unit,
    };
  }, [stairSlug, unitSlug]);

  return { activeImage, apartment, handleChangeImage };
};
