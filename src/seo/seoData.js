// Shared SEO metadata builders. Used at runtime by <Seo /> and at build time
// by scripts/seoPlugin.mjs (sitemap + per-page HTML), so keep this file free
// of React/browser imports.

export const SITE_URL = "https://www.zoi-villa.al";
export const SITE_NAME = "Zoi Villa Residence";
export const DEFAULT_LANGUAGE = "sq";

const MAX_DESCRIPTION_LENGTH = 160;

const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Tirane",
  addressCountry: "AL",
};

const GEO = {
  "@type": "GeoCoordinates",
  latitude: 41.3135505,
  longitude: 19.8560522,
};

const STATIC_PAGES = {
  sq: {
    "/": {
      title: "Zoi Villa Residence | Vila dhe Apartamente ne Tirane",
      description:
        "Zoi Villa Residence ne Tirane, Shqiperi ofron vila, apartamente dhe vendparkime moderne. Rezervo nje vizite private ose kontakto ekipin e shitjeve ne +355 68 202 5455.",
    },
    "/residence": {
      title: "Rezidenca | Zoi Villa Residence ne Tirane",
      description:
        "Njihuni me Zoi Villa Residence: komunitet rezidencial privat ne Tirane me vila, apartamente, gjelberim dhe vendparkime moderne.",
    },
    "/villas": {
      title: "Vila ne shitje ne Tirane | Zoi Villa Residence",
      description:
        "Vila private me pishine dhe oborr ne Zoi Villa Residence, Tirane. Shikoni vilat sipas rrjeshtave T-01, T-02 dhe T-03, siperfaqet dhe disponueshmerine.",
    },
    "/apartments": {
      title: "Apartamente ne shitje ne Tirane | Zoi Villa Residence",
      description:
        "Apartamente moderne 2+1 dhe 3+1 ne Zoi Villa Residence, Tirane. Shikoni njesite sipas shkalleve, planimetrite, siperfaqet dhe disponueshmerine.",
    },
    "/parking": {
      title: "Vendparkime | Zoi Villa Residence ne Tirane",
      description:
        "Vendparkime ne Zoi Villa Residence, Tirane. Shikoni planimetrine, llojet dhe disponueshmerine e parkimeve per banoret.",
    },
    "/contact": {
      title: "Kontakt | Zoi Villa Residence ne Tirane",
      description:
        "Kontaktoni Zoi Villa Residence per vizite private, planimetri dhe disponueshmeri. Telefon dhe WhatsApp: +355 68 202 5455.",
    },
  },
  en: {
    "/": {
      title: "Zoi Villa Residence | Villas and Apartments in Tirana",
      description:
        "Zoi Villa Residence in Tirana, Albania offers modern villas, apartments and parking spaces. Book a private visit or call the sales team at +355 68 202 5455.",
    },
    "/residence": {
      title: "The Residence | Zoi Villa Residence in Tirana",
      description:
        "Discover Zoi Villa Residence: a private residential community in Tirana with villas, apartments, green spaces and modern parking.",
    },
    "/villas": {
      title: "Villas for sale in Tirana | Zoi Villa Residence",
      description:
        "Private villas with pool and garden at Zoi Villa Residence, Tirana. Browse villas by rows T-01, T-02 and T-03 with areas and availability.",
    },
    "/apartments": {
      title: "Apartments for sale in Tirana | Zoi Villa Residence",
      description:
        "Modern 2+1 and 3+1 apartments at Zoi Villa Residence, Tirana. Browse units by staircase with floor plans, areas and availability.",
    },
    "/parking": {
      title: "Parking | Zoi Villa Residence in Tirana",
      description:
        "Parking spaces at Zoi Villa Residence, Tirana. See the parking plan, types and availability for residents.",
    },
    "/contact": {
      title: "Contact | Zoi Villa Residence in Tirana",
      description:
        "Contact Zoi Villa Residence for a private visit, floor plans and availability. Phone and WhatsApp: +355 68 202 5455.",
    },
  },
};

const LABELS = {
  sq: {
    home: "Kryefaqja",
    villas: "Vila",
    apartments: "Apartamente",
    inTirana: "ne Tirane",
    area: "m² siperfaqe",
    grossArea: "m² bruto",
    netArea: "m² neto",
    landArea: "m² truall",
    bedrooms: "dhoma gjumi",
    bathrooms: "banjo",
    pool: "pishine private",
    garden: "oborr privat",
    groundFloor: "kati perdhe",
    floor: (n) => `kati ${n}`,
    orientation: "orientim",
  },
  en: {
    home: "Home",
    villas: "Villas",
    apartments: "Apartments",
    inTirana: "in Tirana",
    area: "m² living area",
    grossArea: "m² gross",
    netArea: "m² net",
    landArea: "m² land",
    bedrooms: "bedrooms",
    bathrooms: "bathrooms",
    pool: "private pool",
    garden: "private garden",
    groundFloor: "ground floor",
    floor: (n) => `floor ${n}`,
    orientation: "facing",
  },
};

const getLang = (lang) => (STATIC_PAGES[lang] ? lang : DEFAULT_LANGUAGE);

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const truncate = (text, max = MAX_DESCRIPTION_LENGTH) => {
  const clean = String(text ?? "")
    .replace(/\s+/g, " ")
    .trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "")}…`;
};

const breadcrumb = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const getStaticPageSeo = (path, lang) => {
  const page = STATIC_PAGES[getLang(lang)][path];
  if (!page) return null;
  return { ...page, path };
};

export const STATIC_PAGE_PATHS = Object.keys(STATIC_PAGES[DEFAULT_LANGUAGE]);

export const getVillaPath = (villa) => `/villas/${villa.id}`;

export const getApartmentPath = (stair, unit) =>
  `/apartments/${stair.slug}/${unit.slug}`;

export const getVillaSeo = (villa, lang) => {
  const l = LABELS[getLang(lang)];
  const path = getVillaPath(villa);
  const url = absoluteUrl(path);

  const facts = [
    `${villa.area} ${l.area}`,
    villa.landArea && `${villa.landArea} ${l.landArea}`,
    `${villa.bedrooms} ${l.bedrooms}`,
    `${villa.bathrooms} ${l.bathrooms}`,
    villa.hasPool && l.pool,
    villa.hasGarden && l.garden,
  ].filter(Boolean);

  const amenities = [
    villa.hasPool && l.pool,
    villa.hasGarden && l.garden,
  ].filter(Boolean);

  return {
    path,
    title: `${villa.name} ${villa.row} – ${villa.category} ${l.inTirana} | ${SITE_NAME}`,
    description: truncate(
      `${villa.name} (${villa.row}), ${SITE_NAME}: ${facts.join(", ")}. ${villa.status}. ${villa.shortDescription}`,
    ),
    jsonLd: [
      {
        "@type": "SingleFamilyResidence",
        "@id": `${url}#villa`,
        name: `${villa.name} ${villa.row}`,
        description: villa.description?.trim(),
        url,
        image: villa.images?.map(absoluteUrl),
        floorSize: {
          "@type": "QuantitativeValue",
          value: villa.area,
          unitCode: "MTK",
        },
        numberOfBedrooms: villa.bedrooms,
        numberOfBathroomsTotal: villa.bathrooms,
        amenityFeature: amenities.map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        address: ADDRESS,
        geo: GEO,
        containedInPlace: { "@id": `${SITE_URL}/#residence` },
      },
      breadcrumb([
        { name: l.home, path: "/" },
        { name: l.villas, path: "/villas" },
        { name: `${villa.name} ${villa.row}`, path },
      ]),
    ],
  };
};

export const getApartmentSeo = (stair, unit, lang) => {
  const l = LABELS[getLang(lang)];
  const path = getApartmentPath(stair, unit);
  const url = absoluteUrl(path);
  const floor = unit.floor === 0 ? l.groundFloor : l.floor(unit.floor);

  const facts = [
    `${unit.area} ${l.grossArea}`,
    `${unit.netArea} ${l.netArea}`,
    `${unit.bedrooms} ${l.bedrooms}`,
    `${unit.bathrooms} ${l.bathrooms}`,
    `${l.orientation} ${unit.orientation}`,
  ];

  return {
    path,
    title: `${unit.type} ${l.inTirana} – ${stair.name}, ${unit.name} | ${SITE_NAME}`,
    description: truncate(
      `${unit.type}, ${stair.name}, ${floor}, ${SITE_NAME}: ${facts.join(", ")}. ${unit.status}. ${unit.shortDescription}`,
    ),
    jsonLd: [
      {
        "@type": "Apartment",
        "@id": `${url}#apartment`,
        name: `${unit.type} – ${stair.name}, ${unit.name}`,
        description: unit.description?.trim(),
        url,
        image: (unit.gallery?.length ? unit.gallery : [unit.image])
          .concat(unit.floorPlan ? [unit.floorPlan] : [])
          .map(absoluteUrl),
        floorSize: {
          "@type": "QuantitativeValue",
          value: unit.area,
          unitCode: "MTK",
        },
        floorLevel: String(unit.floor),
        numberOfBedrooms: unit.bedrooms,
        numberOfBathroomsTotal: unit.bathrooms,
        address: ADDRESS,
        geo: GEO,
        containedInPlace: { "@id": `${SITE_URL}/#residence` },
      },
      breadcrumb([
        { name: l.home, path: "/" },
        { name: l.apartments, path: "/apartments" },
        { name: `${stair.name}, ${unit.name}`, path },
      ]),
    ],
  };
};
