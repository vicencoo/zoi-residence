import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Waves,
  MapPin,
  Phone,
  Car,
  //   Instagram,
  //   Facebook,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { propertyCategories } from "../../constants/propertyCategories";
import { features } from "../../constants/features";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export const HomePage = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
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
      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-10 pt-36 lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[#17130d] md:text-6xl lg:text-7xl"
          >
            {t("section-one.title")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-[#62594d] md:text-xl"
          >
            {t("section-one.description")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#residenca"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#17130d] px-7 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#d8b56d] hover:text-[#17130d]"
            >
              Zbulo rezidencën
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white/65 px-7 py-4 font-semibold text-[#17130d] backdrop-blur-xl transition hover:bg-white"
            >
              <Phone className="h-5 w-5" />
              Kontakto agjentin
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid max-w-2xl grid-cols-3 gap-4"
          >
            {[
              ["100%", "Rezidencë banimi"],
              ["2", "Kategori pronash"],
              ["Finale", "Fazë ndërtimi"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-black/10 bg-white/65 p-5 shadow-[0_8px_30px_rgba(55,38,15,0.08)] backdrop-blur-xl"
              >
                <p className="text-3xl font-semibold text-[#d8b56d]">
                  {number}
                </p>
                <p className="mt-1 text-sm text-[#62594d]">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotateY: -18 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative perspective-[1400px]"
        >
          <motion.div
            animate={{
              y: [0, -16, 0],
              rotateX: [0, 2, 0],
              rotateY: [-5, 5, -5],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2.2rem] border border-black/10 bg-white/75 p-3 shadow-[0_45px_120px_rgba(55,38,15,0.18)] backdrop-blur-2xl transform-3d"
          >
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80"
              alt="Rezidencë moderne luksoze"
              className="h-130 w-full rounded-[1.7rem] object-cover"
            />
            <div className="absolute inset-3 rounded-[1.7rem] bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-black/35 p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                    Vendndodhje premium
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Qetësi, privatësi dhe stil modern
                  </h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d8b56d] text-[#17130d]">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-5 top-16 hidden rounded-3xl border border-black/10 bg-white/80 p-4 shadow-[0_20px_60px_rgba(55,38,15,0.12)] backdrop-blur-2xl md:block"
          >
            <Waves className="mb-3 h-6 w-6 text-[#9a7330]" />
            <p className="text-sm font-semibold text-[#17130d]">
              Vila me pishinë
            </p>
            <p className="text-xs text-[#62594d]">Ekskluzive & private</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section
        id="residencconst"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
              Pse kjo rezidencë?
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
              E ndërtuar për njerëz që duan më shumë se një shtëpi.
            </h2>
          </div>
          <p className="max-w-md text-[#62594d]">
            Çdo element është menduar për banim cilësor: qetësi, akses i lehtë,
            hapësira private dhe arkitekturë që ruan vlerën me kohën.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={isMobile ? false : { opacity: 0, y: 28 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, rotateX: 6, rotateY: -6 }}
              className="group rounded-4xl border border-black/10 bg-white/75 p-6 shadow-[0_16px_50px_rgba(55,38,15,0.07)] backdrop-blur-xl transition transform-3d hover:border-[#9a7330]/30 hover:bg-white"
            >
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-[#d8b56d]/15 text-[#9a7330] transition group-hover:scale-110">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#17130d]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-[#62594d]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Property Categories ── */}
      <section
        id="kategorite"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
            Kategoritë e pronave
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
            Apartamente dhe vila në shitje
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#62594d]">
            Në Home shfaqim vetëm një prezantim të shkurtër të rezidencës. Faqet
            e dedikuara për apartamente dhe vila mund të kenë planimetri, çmime,
            galeri dhe disponueshmëri të plotë.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {propertyCategories.map((property, index) => (
            <motion.article
              key={property.type}
              onMouseEnter={() => setActive(index)}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -14, rotateX: 5, rotateY: index === 0 ? -4 : 4 }}
              className={`group overflow-hidden rounded-[2.2rem] border bg-white/75 shadow-[0_30px_80px_rgba(55,38,15,0.12)] backdrop-blur-xl transition duration-500 transform-3d ${
                active === index ? "border-[#9a7330]/50" : "border-black/10"
              }`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-700 md:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-[#17130d] backdrop-blur-xl">
                  {property.type}
                </span>
              </div>
              <div className="p-7 md:p-8">
                <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#17130d]">
                  {property.title}
                </h3>
                <p className="mt-4 leading-8 text-[#62594d]">
                  {property.description}
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {property.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-2xl border border-black/10 bg-[#f1e6d4] px-4 py-3 text-sm text-[#62594d]"
                    >
                      ✓ {detail}
                    </div>
                  ))}
                </div>
                <span
                  onClick={() => navigate(property.path)}
                  className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#17130d] px-6 py-3 font-semibold text-white transition hover:bg-[#d8b56d] hover:text-[#17130d]"
                >
                  {property.button}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Parking ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2.5rem] border border-[#9a7330]/20 bg-white/75 shadow-[0_35px_100px_rgba(55,38,15,0.12)] backdrop-blur-2xl"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-12">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#d8b56d]/15 text-[#9a7330]">
                <Car className="h-7 w-7" />
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
                Parkime opsionale
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
                31 vendparkime për banorët e rezidencës.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#62594d]">
                Çdo parkim ka 12.5 m² sipërfaqe parkimi dhe 8.8 m² sipërfaqe të
                përbashkët. Parkimet mund të zgjidhen si opsion shtesë bashkë me
                apartamentin.
              </p>

              <button
                onClick={() => navigate("/parking")}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#d8b56d] px-7 py-4 font-semibold text-[#17130d] transition hover:bg-[#17130d] hover:text-white"
              >
                Shiko parkimet
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </div>

            <div className="relative min-h-90">
              <img
                src="/images/parking/parking-plan.jpg"
                alt="Planimetria e parkimeve"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/10 to-transparent lg:from-[#f4efe6]/80" />

              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["31", "Vendparkime"],
                  ["12.5 m²", "Sip. parkimi"],
                  ["8.8 m²", "E përbashkët"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-black/10 bg-white/80 p-4 backdrop-blur-xl shadow-[0_8px_24px_rgba(55,38,15,0.1)]"
                  >
                    <p className="text-2xl font-semibold text-[#d8b56d]">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-[#62594d]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

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
            <button className="rounded-full bg-[#d8b56d] px-7 py-4 font-semibold text-[#17130d] transition hover:bg-[#17130d] hover:text-white">
              Dërgo
            </button>
          </form>
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  );
};
