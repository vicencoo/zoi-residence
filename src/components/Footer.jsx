import { Home, Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "../constants/navItems";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { Instagram } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Email } from "@mui/icons-material";

const FOOTERCONTACT = [
  // { id: 1, icon: <Instagram className="h-4 w-4" /> },
  {
    id: 2,
    icon: <WhatsApp className="h-4 w-4" />,
    path: "https://wa.me/355682025455",
  },
  {
    id: 3,
    icon: <Email className="h-4 w-4" />,
    path: "mailto:klaudio.goci@atoil.al",
  },
];

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative z-10 bg-[#080808] px-6 pb-8 pt-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5.5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
        <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-300/30 bg-amber-200/10">
                <Home className="h-5 w-5 text-amber-200" />
              </div>
              <div>
                <p className="text-xl font-semibold tracking-[0.25em] text-white/45">
                  Zoi Villa
                </p>
                <p className="text-xs uppercase tracking-[0.42em] text-white/45">
                  Residence
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm leading-7 text-white/55">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm uppercase tracking-[0.28em] text-amber-200">
              {t("footer.navigationLabel")}
            </h4>
            <div className="grid gap-3 text-white/58">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="transition hover:text-white capitalize"
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm uppercase tracking-[0.28em] text-amber-200">
              {t("footer.contactLabel")}
            </h4>
            <div className="grid gap-3 text-white/58">
              <a
                href="tel:+355682025455"
                className="inline-flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4" /> +355 68 202 5455
              </a>
              <a
                href="mailto:klaudio.goci@atoil.al"
                className="inline-flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-4 w-4" /> klaudio.goci@atoil.al
              </a>
              <span className="inline-flex items-center gap-3">
                <MapPin className="h-4 w-4" /> {t("footer.adress")}
              </span>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm uppercase tracking-[0.28em] text-amber-200">
              {t("footer.socialLabel")}
            </h4>
            <div className="flex gap-3">
              {FOOTERCONTACT.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/4 text-white/65 transition hover:border-amber-200/40 hover:text-amber-200 cursor-pointer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-white/42">
              {t("footer.socialText")}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 px-8 py-6 text-sm text-white/38 md:flex-row md:px-12">
          <p>{t("footer.footerRights")}</p>
          <p>{t("footer.footerProjected")}</p>
        </div>
      </div>
    </footer>
  );
};
