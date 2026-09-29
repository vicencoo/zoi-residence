import { useEffect } from "react";
import { absoluteUrl, SITE_URL } from "../seo/seoData";

const JSON_LD_ID = "page-jsonld";

const setMeta = (attr, key, content) => {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const setJsonLd = (items) => {
  let element = document.getElementById(JSON_LD_ID);

  if (!items?.length) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = JSON_LD_ID;
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": items,
  });
};

// Renders nothing; keeps <head> metadata in sync with the current page.
export const Seo = ({ title, description, path, jsonLd }) => {
  useEffect(() => {
    const url = path === "/" ? `${SITE_URL}/` : absoluteUrl(path);

    document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setJsonLd(jsonLd);
  }, [title, description, path, jsonLd]);

  return null;
};
