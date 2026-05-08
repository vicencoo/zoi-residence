import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { villaRows } from "../../data/villas";

export const useViewVilla = () => {
  const { id } = useParams();

  const villa = useMemo(() => {
    return villaRows
      .flatMap((row) => row.villas)
      .find((villa) => villa.id === id || villa.slug === id);
  }, [id]);

  const [activeImage, setActiveImage] = useState(villa?.images?.[0]);
  const handleChangeImage = (image) => setActiveImage(image);

  return { activeImage, handleChangeImage, id, villa };
};
