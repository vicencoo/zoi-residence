import {
  Bath,
  BedDouble,
  Car,
  Compass,
  Layers3,
  Maximize2,
  Trees,
  Waves,
} from "lucide-react";

export const VIEW_VILLA_DETAILS = (t, villa) => [
  {
    icon: Maximize2,
    label: `${t("details.detail1")}`,
    value: `${villa.area} m²`,
  },
  {
    icon: Trees,
    label: `${t("details.detail2")}`,
    value: `${villa.landArea} m²`,
  },
  { icon: BedDouble, label: `${t("details.detail3")}`, value: villa.bedrooms },
  { icon: Bath, label: `${t("details.detail4")}`, value: villa.bathrooms },
  { icon: Car, label: `${t("details.detail5")}`, value: villa.parking },
  { icon: Layers3, label: `${t("details.detail6")}`, value: villa.floors },
  { icon: Compass, label: `${t("details.detail7")}`, value: villa.orientation },
  {
    icon: Waves,
    label: `${t("details.detail8")}`,
    value: villa.hasPool ? `${t("details.hasPool")}` : `${t("details.noPool")}`,
  },
];
