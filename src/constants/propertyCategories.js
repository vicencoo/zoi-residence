export const PROPERTY_CATEGS = (t) => [
  {
    type: `${t("propertyCateg.cardType1")}`,
    title: `${t("propertyCateg.cardTitle1")}`,
    description: `${t("propertyCateg.cardDescription1")}`,
    details: [
      "2+1 dhe 3+1",
      `${t("propertyCateg.cardDetails1_1")}`,
      `${t("propertyCateg.cardDetails1_2")}`,
    ],
    button: `${t("propertyCateg.cardButton1")}`,
    path: "/apartments",
    image: "/images/apartments.webp",
  },
  {
    type: `${t("propertyCateg.cardType2")}`,
    title: `${t("propertyCateg.cardTitle2")}`,
    description: `${t("propertyCateg.cardDescription2")}`,
    details: [
      `${t("propertyCateg.cardDetails2_1")}`,
      `${t("propertyCateg.cardDetails2_2")}`,
      `${t("propertyCateg.cardDetails2_3")}`,
    ],
    button: `${t("propertyCateg.cardButton2")}`,
    path: "/villas",
    image: "/images/villas.webp",
  },
];
