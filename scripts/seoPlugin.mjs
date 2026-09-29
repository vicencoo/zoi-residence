// Vite build plugin: after the bundle is written, generates sitemap.xml,
// robots.txt and a copy of index.html for every public route with that
// page's <title>, description, canonical, Open Graph and JSON-LD already in
// the markup, so crawlers see correct metadata before any JavaScript runs.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { VILLA_ROWS } from "../src/data/villas.js";
import { APARTMENT_STAIRS } from "../src/data/apartments.js";
import {
  DEFAULT_LANGUAGE,
  SITE_URL,
  STATIC_PAGE_PATHS,
  absoluteUrl,
  getApartmentSeo,
  getStaticPageSeo,
  getVillaSeo,
} from "../src/seo/seoData.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const loadTranslator = (namespace) => {
  const file = path.join(
    root,
    "src/i18n/locales",
    DEFAULT_LANGUAGE,
    `${namespace}.json`,
  );
  const messages = JSON.parse(fs.readFileSync(file, "utf8"));
  return (key) =>
    key.split(".").reduce((value, part) => value?.[part], messages) ?? key;
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const getPages = () => {
  const villas = VILLA_ROWS(loadTranslator("villas")).flatMap(
    (row) => row.villas,
  );
  const stairs = APARTMENT_STAIRS(loadTranslator("apartments"));

  return [
    ...STATIC_PAGE_PATHS.map((pagePath) => ({
      ...getStaticPageSeo(pagePath, DEFAULT_LANGUAGE),
      priority: pagePath === "/" ? "1.0" : "0.8",
    })),
    ...villas.map((villa) => ({
      ...getVillaSeo(villa, DEFAULT_LANGUAGE),
      priority: "0.7",
      images: villa.images,
    })),
    ...stairs.flatMap((stair) =>
      stair.units.map((unit) => ({
        ...getApartmentSeo(stair, unit, DEFAULT_LANGUAGE),
        priority: "0.7",
        images: unit.gallery?.length ? unit.gallery : [unit.image],
      })),
    ),
  ];
};

const pageUrl = (pagePath) =>
  pagePath === "/" ? `${SITE_URL}/` : absoluteUrl(pagePath);

const replaceAttr = (html, selector, attr, value) => {
  const pattern = new RegExp(`(<${selector}[^>]*?\\s${attr}=")[^"]*(")`);
  return html.replace(
    pattern,
    (_, start, end) => `${start}${escapeHtml(value)}${end}`,
  );
};

const renderPageHtml = (template, page) => {
  const url = pageUrl(page.path);
  let html = template.replace(
    /<title>[\s\S]*?<\/title>/,
    () => `<title>${escapeHtml(page.title)}</title>`,
  );

  html = replaceAttr(
    html,
    'meta\\s+name="description"',
    "content",
    page.description,
  );
  html = replaceAttr(html, 'link\\s+rel="canonical"', "href", url);
  html = replaceAttr(html, 'meta\\s+property="og:url"', "content", url);
  html = replaceAttr(
    html,
    'meta\\s+property="og:title"',
    "content",
    page.title,
  );
  html = replaceAttr(
    html,
    'meta\\s+property="og:description"',
    "content",
    page.description,
  );
  html = replaceAttr(
    html,
    'meta\\s+name="twitter:title"',
    "content",
    page.title,
  );
  html = replaceAttr(
    html,
    'meta\\s+name="twitter:description"',
    "content",
    page.description,
  );

  if (page.jsonLd?.length) {
    const json = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": page.jsonLd,
    }).replace(/</g, "\\u003c");
    html = html.replace(
      "</head>",
      () =>
        `  <script type="application/ld+json" id="page-jsonld">${json}</script>\n  </head>`,
    );
  }

  return html;
};

const renderSitemap = (pages) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages.map((page) => {
    const images = (page.images ?? [])
      .map(
        (image) =>
          `\n    <image:image><image:loc>${escapeHtml(absoluteUrl(image))}</image:loc></image:image>`,
      )
      .join("");
    return `  <url>
    <loc>${escapeHtml(pageUrl(page.path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${page.priority}</priority>${images}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>
`;
};

const renderRobots = () => `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

export const seoPlugin = () => {
  let outDir;

  return {
    name: "zoi-seo",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      const pages = getPages();

      for (const page of pages) {
        const file = path.join(outDir, page.path, "index.html");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, renderPageHtml(template, page));
      }

      fs.writeFileSync(path.join(outDir, "sitemap.xml"), renderSitemap(pages));
      fs.writeFileSync(path.join(outDir, "robots.txt"), renderRobots());

      this.info?.(`generated sitemap.xml with ${pages.length} URLs`);
    },
  };
};
