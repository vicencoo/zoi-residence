import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { VILLA_ROWS } from "../../data/villas";
import { useTranslation } from "react-i18next";

export const useViewVilla = () => {
  const { id } = useParams();
  const { t } = useTranslation("villas");
  const villaRows = VILLA_ROWS(t);

  const villa = useMemo(() => {
    return villaRows
      .flatMap((row) => row.villas)
      .find((villa) => villa.id === id || villa.slug === id);
  }, [id, villaRows]);

  const [activeImage, setActiveImage] = useState(villa?.images?.[0]);
  const handleChangeImage = (image) => setActiveImage(image);

  return { activeImage, handleChangeImage, id, villa };
};
