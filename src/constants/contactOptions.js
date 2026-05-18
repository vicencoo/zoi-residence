import { Mail, MessageCircle, Phone } from "lucide-react";

export const CONTACT_OPTIONS = (t) => [
  {
    icon: Phone,
    title: `${t("contactOptions.info.title1")}`,
    value: "+355 68 202 5455",
    text: `${t("contactOptions.info.text1")}`,
    href: "tel:+355682025455",
    cta: `${t("contactOptions.info.cta1")}`,
  },
  {
    icon: MessageCircle,
    title: `${t("contactOptions.info.title2")}`,
    value: "+355 68 202 5455",
    text: `${t("contactOptions.info.text2")}`,
    href: "https://wa.me/355682025455",
    cta: `${t("contactOptions.info.cta2")}`,
  },
  {
    icon: Mail,
    title: `${t("contactOptions.info.title3")}`,
    value: "klaudio.goci@atoil.al",
    text: `${t("contactOptions.info.text3")}`,
    href: "klaudio.goci@atoil.al",
    cta: `${t("contactOptions.info.cta3")}`,
  },
];
