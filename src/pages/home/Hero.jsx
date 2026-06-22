import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Waves } from "lucide-react";

const HERO_INFO = (t) => [
  ["100%", `${t("hero.info1")}`],
  ["2", `${t("hero.info2")}`],
  ["Finale", `${t("hero.info3")}`],
];

export const Hero = ({ fadeUp, t }) => {
  const heroInfo = HERO_INFO(t);
  return (
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
          {t("hero.title")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-2xl text-lg leading-8 text-[#62594d] md:text-xl"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#residenca"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#17130d] px-7 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#d8b56d] hover:text-[#17130d]"
          >
            {t("hero.discover")}

            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white/65 px-7 py-4 font-semibold text-[#17130d] backdrop-blur-xl transition hover:bg-white"
          >
            <Phone className="h-5 w-5" />
            {t("hero.contact")}
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 grid max-w-2xl grid-cols-3 gap-4"
        >
          {heroInfo.map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-black/10 bg-white/65 p-5 shadow-[0_8px_30px_rgba(55,38,15,0.08)] backdrop-blur-xl"
            >
              <p className="text-3xl font-semibold text-[#d8b56d]">{number}</p>
              <p className="mt-1 text-sm text-[#62594d]">{label}</p>
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
          className="relative rounded-[2.2rem] border border-black/10 bg-white/75 p-3 shadow-[0_45px_120px_rgba(55,38,15,0.18)] backdrop-blur-2xl transform-3d"
        >
          <img
            src="/images/ZOI_Villa_Residence.webp"
            alt="Rezidencë moderne luksoze"
            width="1440"
            height="960"
            fetchPriority="high"
            decoding="async"
            className="h-130 w-full rounded-[1.7rem] object-cover"
          />
          <div className="absolute inset-3 rounded-[1.7rem] bg-linear-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/15 bg-black/35 p-5 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                  {t("hero.location")}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {t("hero.imageText")}
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
            {t("hero.miniCardTitle")}
          </p>
          <p className="text-xs text-[#62594d]">{t("hero.miniCardText")}</p>
        </motion.div>
      </motion.div>
    </section>
  );
};
