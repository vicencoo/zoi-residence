import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { APARTMENT_STAIRS } from "../../data/apartments";
import { useTranslation } from "react-i18next";

export const useViewApartment = () => {
  const { t, i18n } = useTranslation("apartments");
  const { stairSlug, unitSlug } = useParams();

  const apartmentStairs = useMemo(
    () => APARTMENT_STAIRS(t),
    [t, i18n.language],
  );

  const [activeImage, setActiveImage] = useState(0);

  const handleChangeImage = (image) => setActiveImage(image);

  const apartment = useMemo(() => {
    const stair = apartmentStairs.find((item) => item.slug === stairSlug);
    const unit = stair?.units.find((item) => item.slug === unitSlug);

    if (!stair || !unit) return null;

    return { stair, unit };
  }, [stairSlug, unitSlug, apartmentStairs]);

  return { activeImage, apartment, handleChangeImage };
};
