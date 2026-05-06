import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  Waves,
  MapPin,
  ShieldCheck,
  Sparkles,
  Phone,
  Trees,
  //   Instagram,
  //   Facebook,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const propertyCategories = [
  {
    type: "Apartamente",
    title: "Apartamente moderne për familje",
    description:
      "Tipologji funksionale, ndriçim natyral dhe organizim inteligjent për jetesë të përditshme komode.",
    details: ["1+1, 2+1 dhe 3+1", "Ballkone të bollshme", "Pamje të hapura"],
    button: "Shiko apartamentet",
    path: "/apartments",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    type: "Vila",
    title: "Vila private me oborr",
    description:
      "Hapësira më të mëdha, privatësi maksimale dhe disa vila me pishinë private për një standard më të lartë jetese.",
    button: "Shiko vilat",
    path: "/villas",
    details: ["Oborr privat", "Disa me pishinë", "Arkitekturë premium"],
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
  },
];

const features = [
  {
    icon: Home,
    title: "Vendbanim perfekt",
    text: "Ambient i qetë, privat dhe i projektuar për familje.",
  },
  {
    icon: ShieldCheck,
    title: "Privatësi & siguri",
    text: "Hyrje e kontrolluar dhe organizim i menduar rezidencial.",
  },
  {
    icon: Trees,
    title: "Hapësira të gjelbra",
    text: "Oborre, rrugica dhe zona të hapura për një jetesë më të qetë.",
  },
  {
    icon: Sparkles,
    title: "Arkitekturë moderne",
    text: "Fasada elegante, materiale cilësore dhe detaje luksoze.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export const HomePage = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen overflow-hidden bg-[#080806] text-white selection:bg-amber-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-105 w-105 rounded-full bg-amber-500/20 blur-[120px]" />
        <div className="absolute bottom-[-12%] right-[-10%] h-130 w-130 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>

      {/* <Header /> */}

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-10 pt-36 lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          {/* <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-100 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.9)]" />
            Ndërtimet janë në fazën finale
          </motion.div> */}

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl"
          >
            Jetesa luksoze që fillon me qetësinë.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/62 md:text-xl"
          >
            Një rezidencë ekskluzive për banim, me apartamente moderne dhe vila
            private në shitje. Pa restorante, pa zhurmë, vetëm privatësi,
            elegancë dhe hapësirë për familjen tuaj.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#residenca"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02] hover:bg-amber-200"
            >
              Zbulo rezidencën
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
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
                className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
              >
                <p className="text-3xl font-semibold text-amber-200">
                  {number}
                </p>
                <p className="mt-1 text-sm text-white/50">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

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
            className="relative rounded-[2.2rem] border border-white/15 bg-white/10 p-3 shadow-[0_45px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl transform-3d"
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
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
                    Vendndodhje premium
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Qetësi, privatësi dhe stil modern
                  </h2>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-5 top-16 hidden rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl md:block"
          >
            <Waves className="mb-3 h-6 w-6 text-amber-200" />
            <p className="text-sm font-semibold">Vila me pishinë</p>
            <p className="text-xs text-white/55">Ekskluzive & private</p>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="residenca"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-200">
              Pse kjo rezidencë?
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              E ndërtuar për njerëz që duan më shumë se një shtëpi.
            </h2>
          </div>
          <p className="max-w-md text-white/55">
            Çdo element është menduar për banim cilësor: qetësi, akses i lehtë,
            hapësira private dhe arkitekturë që ruan vlerën me kohën.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, rotateX: 6, rotateY: -6 }}
              className="group rounded-4xl border border-white/10 bg-white/5.5 p-6 backdrop-blur-xl transition transform-3d hover:border-amber-200/40 hover:bg-white/8"
            >
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-amber-200/15 text-amber-200 transition group-hover:scale-110">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/52">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="kategorite"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-200">
            Kategoritë e pronave
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Apartamente dhe vila në shitje
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/55">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -14, rotateX: 5, rotateY: index === 0 ? -4 : 4 }}
              className={`group overflow-hidden rounded-[2.2rem] border bg-white/6 shadow-2xl backdrop-blur-xl transition duration-500 transform-3d ${active === index ? "border-amber-200/50" : "border-white/10"}`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-black/50 px-5 py-2 text-sm font-medium text-amber-100 backdrop-blur-xl">
                  {property.type}
                </span>
              </div>
              <div className="p-7 md:p-8">
                <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                  {property.title}
                </h3>
                <p className="mt-4 leading-8 text-white/56">
                  {property.description}
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {property.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/68"
                    >
                      ✓ {detail}
                    </div>
                  ))}
                </div>
                <span
                  // href="#kontakt"
                  onClick={() => navigate(property.path)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-amber-200"
                >
                  {property.button}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-200">
                Investim i sigurt
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Një komunitet privat në fazën finale të ndërtimit.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/58">
                Home page fokusohet te atmosfera, standardi dhe identiteti i
                rezidencës. Detajet e plota të pronave do të prezantohen në
                faqet e veçanta për apartamente dhe vila.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Vetëm për banim",
                  "Pa restorante apo shërbime brenda",
                  "Apartamente dhe vila",
                  "Disa vila me pishinë private",
                ].map((text) => (
                  <div
                    key={text}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/70"
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
              <div className="absolute inset-0 bg-linear-to-r from-[#080806] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-amber-200/20 bg-amber-200/10 p-8 text-center shadow-[0_0_100px_rgba(252,211,77,0.12)] backdrop-blur-2xl md:p-14">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-200">
            Kontakt
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Dëshironi ta prezantojmë rezidencën nga afër?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/60">
            Lini kontaktin tuaj dhe ekipi i shitjeve do t’ju prezantojë
            rezidencën, kategoritë e pronave dhe hapat e ardhshëm për rezervim.
          </p>
          <form className="mx-auto mt-9 grid max-w-2xl gap-4 md:grid-cols-[1fr_1fr_auto]">
            <input
              className="rounded-full border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200/50"
              placeholder="Emri juaj"
            />
            <input
              className="rounded-full border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200/50"
              placeholder="Telefoni"
            />
            <button className="rounded-full bg-amber-300 px-7 py-4 font-semibold text-black transition hover:bg-white">
              Dërgo
            </button>
          </form>
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  );
};
