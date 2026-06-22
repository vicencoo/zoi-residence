import { useTranslation } from "react-i18next";
import { PropertyCategories } from "./PropertyCategories";
import { useHome } from "./useHome";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { HomeParking } from "./HomeParking";
import { INVESTMENT_INFO } from "../../constants/investmentInfo";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export const HomePage = () => {
  const { active, handleChangeActive, isMobile } = useHome();
  const { t } = useTranslation("home");
  const navigate = useNavigate();
  const investmentInfo = INVESTMENT_INFO(t);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4efe6] text-[#17130d] selection:bg-[#d8b56d] selection:text-[#17130d]">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-105 w-105 rounded-full bg-[#d6b46d]/25 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-10%] h-130 w-130 rounded-full bg-[#17130d]/10 blur-[140px]" />
      </div>

      {/* {<Header />} */}

      {/* ── Hero ── */}
      <Hero fadeUp={fadeUp} t={t} />
      {/* ── Features ── */}
      <Features isMobile={isMobile} t={t} />

      {/* ── Property Categories ── */}
      <PropertyCategories
        isMobile={isMobile}
        active={active}
        handleChangeActive={handleChangeActive}
        t={t}
      />

      {/* ── Parking ── */}
      <HomeParking t={t} />

      {/* ── Investment ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/75 shadow-[0_40px_120px_rgba(55,38,15,0.12)] backdrop-blur-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
                {t("investment.label")}
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
                {t("investment.title")}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#62594d]">
                {t("investment.description")}
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {investmentInfo.map((text) => (
                  <div
                    key={text}
                    className="rounded-2xl border border-black/10 bg-[#f1e6d4] p-4 text-[#62594d]"
                  >
                    ✓ {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-105">
              <img
                src="/images/investment.webp"
                alt="Interior luksoz"
                loading="lazy"
                decoding="async"
                width="1440"
                height="960"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-white/60 via-transparent to-transparent lg:from-[#f4efe6]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="kontakt" className="relative z-10 px-6 py-24">
        <div className="flex flex-col gap-5 mx-auto max-w-4xl rounded-[2.5rem] border border-[#9a7330]/25 bg-[#d8b56d]/10 p-8 text-center shadow-[0_0_100px_rgba(216,181,109,0.15)] backdrop-blur-2xl md:p-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9a7330]">
            {t("contact.label")}
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#62594d]">
            {t("contact.description")}
          </p>

          <div>
            <button
              type="button"
              className="rounded-full bg-[#d8b56d] px-12 py-4 font-bold text-[#17130d] transition hover:bg-[#17130d] hover:text-white cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              {t("contact.button")}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
