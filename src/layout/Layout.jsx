import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";
import { Seo } from "../components/Seo";
import { getStaticPageSeo } from "../seo/seoData";

export const Layout = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  // Villa and apartment detail pages render their own <Seo />.
  const pageSeo = getStaticPageSeo(
    pathname.replace(/(.)\/$/, "$1"),
    i18n.language,
  );

  return (
    <div className="flex min-h-screen flex-col">
      {pageSeo && <Seo {...pageSeo} />}
      <Header />

      <div className="flex flex-1">
        {/* <Sidebar/> */}
        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};
