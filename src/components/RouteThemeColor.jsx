import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const getRouteColor = (pathname) => {
  if (pathname === "/") return "#080806";
  if (pathname === "/contact") return "#080806";

  if (pathname.startsWith("/residence")) return "#f3eee4";
  if (pathname.startsWith("/apartments")) return "#f4efe6";
  if (pathname.startsWith("/parking")) return "#f4efe6";
  if (pathname.startsWith("/villas")) return "#f4efe6";
  if (pathname.startsWith("/view-villa")) return "#f4efe6";

  return "#080806";
};

export const RouteThemeColor = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const color = getRouteColor(pathname);

    const applyColor = () => {
      document.documentElement.style.backgroundColor = color;
      document.body.style.backgroundColor = color;
      document
        .getElementById("root")
        ?.style.setProperty("background-color", color);

      let meta = document.querySelector('meta[name="theme-color"]');

      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "theme-color";
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", color);
    };

    applyColor();
    requestAnimationFrame(applyColor);
    setTimeout(applyColor, 50);
  }, [pathname]);

  return null;
};
