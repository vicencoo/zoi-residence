import { propertyCategories } from "../../constants/propertyCategories";
import { features } from "../../constants/features";
import { useTranslation } from "react-i18next";
import { PropertyCategories } from "./PropertyCategories";
import { useHome } from "./useHome";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { HomeParking } from "./HomeParking";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export const HomePage = () => {
  const { active, handleChangeActive, isMobile } = useHome();
  const { t } = useTranslation("home");

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
      <Features features={features} isMobile={isMobile} />

      {/* ── Property Categories ── */}
      <PropertyCategories
        propertyCategories={propertyCategories}
        isMobile={isMobile}
        active={active}
        handleChangeActive={handleChangeActive}
      />

      {/* ── Parking ── */}
      <HomeParking />

      {/* ── Investment ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/75 shadow-[0_40px_120px_rgba(55,38,15,0.12)] backdrop-blur-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
                Investim i sigurt
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
                Një komunitet privat në fazën finale të ndërtimit.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#62594d]">
                Home page fokusohet te atmosfera, standardi dhe identiteti i
                rezidencës. Detajet e plota të pronave do të prezantohen në
                faqet e veçanta për apartamente dhe vila.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Vetëm për banim",
                  "Ambiet i gjelbër",
                  "Apartamente dhe vila",
                  "Disa vila me pishinë private",
                ].map((text) => (
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
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80"
                alt="Interior luksoz"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-white/60 via-transparent to-transparent lg:from-[#f4efe6]/60" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="kontakt" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#9a7330]/25 bg-[#d8b56d]/10 p-8 text-center shadow-[0_0_100px_rgba(216,181,109,0.15)] backdrop-blur-2xl md:p-14">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
            Kontakt
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
            Dëshironi ta prezantojmë rezidencën nga afër?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#62594d]">
            Lini kontaktin tuaj dhe ekipi i shitjeve do t'ju prezantojë
            rezidencën, kategoritë e pronave dhe hapat e ardhshëm për rezervim.
          </p>
          <form className="mx-auto mt-9 grid max-w-2xl gap-4 md:grid-cols-[1fr_1fr_auto]">
            <input
              className="rounded-full border border-black/10 bg-white/70 px-5 py-4 text-[#17130d] outline-none placeholder:text-[#62594d]/50 focus:border-[#9a7330]/50 focus:bg-white"
              placeholder="Emri juaj"
            />
            <input
              className="rounded-full border border-black/10 bg-white/70 px-5 py-4 text-[#17130d] outline-none placeholder:text-[#62594d]/50 focus:border-[#9a7330]/50 focus:bg-white"
              placeholder="Telefoni"
            />
            <button className="rounded-full bg-[#d8b56d] px-7 py-4 font-semibold text-[#17130d] transition hover:bg-[#17130d] hover:text-white cursor-pointer">
              Dërgo
            </button>
          </form>
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  );
};
