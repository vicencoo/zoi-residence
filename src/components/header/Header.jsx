import { ArrowRight, Menu, Phone, X } from "lucide-react";

import { motion } from "framer-motion";
import { navItems } from "../../constants/navItems";
import { Link, NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { useHeader } from "./useHeader";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { handleChangeLanguage, isOpen, selectedLocale, setIsOpen } =
    useHeader();

  const { t } = useTranslation("common");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6">
      <div className="mx-auto max-w-7xl rounded-[1.7rem] border border-white/10 bg-[#080806]/70 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <div className="flex items-center justify-between px-4 py-3 md:px-5">
          <Link to={"/"} className="group flex items-center gap-3">
            <img
              src="/images/favicons/zoi-villas-logo.webp"
              alt="ZOI VILLA ICON"
              className="w-12 h-12 transition group-hover:rotate-6"
            />

            <div>
              <p className="text-lg font-semibold tracking-[0.24em] text-white">
                Zoi Villa
              </p>

              <p className="text-[10px] uppercase tracking-[0.42em] text-white/45">
                Residence
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/4 p-1 text-sm text-white/68 lg:flex">
            {navItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.label}
                className={({ isActive }) =>
                  `rounded-full px-5 py-3 transition hover:bg-white/10 hover:text-amber-100 capitalize ${
                    isActive ? "bg-white/10 text-amber-100" : ""
                  }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/4 p-1">
              <button
                onClick={() => handleChangeLanguage("sq")}
                className={`grid h-10 w-10 place-items-center rounded-full transition ${
                  selectedLocale === "sq"
                    ? "bg-white/10 ring-1 ring-amber-200/30"
                    : "hover:bg-white/5"
                }`}
              >
                <ReactCountryFlag
                  countryCode="AL"
                  svg
                  style={{
                    width: "1.4em",
                    height: "1.4em",
                  }}
                />
              </button>

              <button
                onClick={() => handleChangeLanguage("en")}
                className={`grid h-10 w-10 place-items-center rounded-full transition ${
                  selectedLocale === "en"
                    ? "bg-white/10 ring-1 ring-amber-200/30"
                    : "hover:bg-white/5"
                }`}
              >
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{
                    width: "1.4em",
                    height: "1.4em",
                  }}
                />
              </button>
            </div>

            <a
              href="tel:+355682025455"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/4 text-white/70 transition hover:border-amber-200/40 hover:text-amber-200"
            >
              <Phone className="h-4 w-4" />
            </a>

            <Link
              to={"/contact"}
              className="group inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(252,211,77,0.22)] transition hover:bg-white"
            >
              {t("header.reserve-btn")}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/6 text-white lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/10 px-4 pb-4 lg:hidden"
          >
            <div className="grid gap-2 pt-4">
              {/* Mobile Language */}
              <div className="mb-2 flex items-center gap-2">
                <button
                  onClick={() => handleChangeLanguage("sq")}
                  className={`flex-1 rounded-2xl border border-white/10 py-3 ${
                    selectedLocale === "sq" ? "bg-white/10" : "bg-white/5"
                  }`}
                  Link
                >
                  🇦🇱 Shqip
                </button>

                <button
                  onClick={() => handleChangeLanguage("en")}
                  className={`flex-1 rounded-2xl border border-white/10 py-3 ${
                    selectedLocale === "en" ? "bg-white/10" : "bg-white/5"
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>

              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-4 capitalize ${isActive ? "bg-white/25 text-amber-100" : "bg-white/5 text-white/75"}`
                  }
                >
                  {t(item.label)}
                </NavLink>
              ))}

              <Link
                to={"/contact"}
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-2xl bg-amber-300 px-4 py-4 text-center font-semibold text-black"
              >
                {t("header.reserve-btn")}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};
