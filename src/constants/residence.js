import { Leaf, Lock, Waves } from "lucide-react";

export const RESIDENCE_STATS = (t) => [
  { value: "100%", label: `${t("stats.statDesc1")}` },
  { value: "0", label: `${t("stats.statDesc2")}` },
  { value: "2", label: `${t("stats.statDesc3")}` },
  { value: `${t("stats.statTitle4")}`, label: `${t("stats.statDesc4")}` },
];

export const PRINCIPLES = (t) => [
  `${t("principles.principle1")}`,
  `${t("principles.principle2")}`,
  `${t("principles.principle3")}`,
  `${t("principles.principle4")}`,
  `${t("principles.principle5")}`,
];

export const RESIDENCE_HIGHLIGHTS = (t) => [
  {
    icon: Lock,
    title: `${t("highlights.card1Title")}`,
    text: `${t("highlights.card1Text")}`,
  },
  {
    icon: Leaf,
    title: `${t("highlights.card2Title")}`,
    text: `${t("highlights.card2Text")}`,
  },
  {
    icon: Waves,
    title: `${t("highlights.card3Title")}`,
    text: `${t("highlights.card3Text")}`,
  },
];
