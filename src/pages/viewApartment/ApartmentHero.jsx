import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const ApartmentHero = ({ stair, unit, t }) => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32">
      <div className="absolute -right-44 top-20 h-120 w-120 rounded-full bg-[#d8b56d]/25 blur-[130px]" />
      <div className="absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-black/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <button
          onClick={() => navigate("/apartments")}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#62594d] backdrop-blur-xl transition hover:bg-white hover:text-[#17130d] cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("hero.goBackButton")}
        </button>

        <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
              {stair.name} / {unit.type}
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              {unit.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#62594d]">
              {unit.shortDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-4xl border border-black/10 bg-[#17130d] p-6 text-white shadow-[0_30px_100px_rgba(23,19,13,0.22)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/75">{t("hero.status")}</p>
                <h2 className="mt-1 text-2xl font-semibold text-[#d8b56d]">
                  {unit.status}
                </h2>
              </div>

              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-[#d8b56d]">
                <Home className="h-6 w-6" />
              </span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-sm text-white/75">{t("hero.price")}</p>
                <p className="mt-1 text-xl font-semibold">{unit.price}</p>
              </div>
              <div>
                <p className="text-sm text-white/75">{t("hero.pricePerM2")}</p>
                <p className="mt-1 text-xl font-semibold">{unit.pricePerM2}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
