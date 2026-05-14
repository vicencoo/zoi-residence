import { Home, ShieldCheck, Sparkles, Trees } from "lucide-react";

export const FEATURES = (t) => [
  {
    icon: Home,
    title: `${t("features.cardTitle1")}`,
    text: `${t("features.cardText1")}`,
  },
  {
    icon: ShieldCheck,
    title: `${t("features.cardTitle2")}`,
    text: `${t("features.cardText2")}`,
  },
  {
    icon: Trees,
    title: `${t("features.cardTitle3")}`,
    text: `${t("features.cardText3")}`,
  },
  {
    icon: Sparkles,
    title: `${t("features.cardTitle4")}`,
    text: `${t("features.cardText4")}`,
  },
];
