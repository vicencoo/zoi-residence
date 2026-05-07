import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Home,
  Layers3,
  MousePointerClick,
  Car,
} from "lucide-react";
import { apartmentStairs } from "../../data/apartments";
import { useNavigate } from "react-router-dom";

export const Apartments = () => {
  const [selectedStair, setSelectedStair] = useState(apartmentStairs[0]);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      <section className="relative overflow-hidden px-6 pb-14 pt-36">
        <div className="absolute -right-40 top-24 h-130 w-130 rounded-full bg-[#d6b46d]/25 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-105 w-105 rounded-full bg-[#17130d]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]"
          >
            Apartamentet
          </motion.p>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
            >
              Zgjidh shkallën dhe eksploro njësitë e banimit.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="max-w-xl text-lg leading-8 text-[#62594d]"
            >
              Apartamentet janë të organizuara në 4 shkallë banimi. Çdo shkallë
              ka njësitë e saj, të prezantuara qartë për një eksperiencë të
              thjeshtë dhe elegante.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
          <aside className="space-y-5">
            <div className="rounded-4xl border border-black/10 bg-white/65 p-5 shadow-[0_24px_80px_rgba(55,38,15,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#17130d] text-[#d8b56d]">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-[#62594d]">Organizimi</p>
                  <h2 className="text-xl font-semibold">4 shkallë banimi</h2>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {apartmentStairs.map((stair, index) => {
                const isActive = selectedStair.id === stair.id;

                return (
                  <motion.button
                    key={stair.id}
                    onClick={() => setSelectedStair(stair)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className={`group h-47 overflow-hidden rounded-4xl border p-4 text-left shadow-[0_20px_70px_rgba(55,38,15,0.08)] transition-colors duration-300 ${
                      isActive
                        ? "border-[#9a7330] bg-[#17130d] text-white"
                        : "border-black/10 bg-white/75 text-[#17130d] hover:bg-white"
                    }`}
                  >
                    <div className="grid h-full gap-4 sm:grid-cols-[150px_1fr]">
                      <div className="relative h-full overflow-hidden rounded-[1.45rem]">
                        <img
                          src={stair.image}
                          alt={stair.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" />
                      </div>

                      <div className="flex min-h-0 flex-col justify-between py-1">
                        <div>
                          <p
                            className={`text-xs uppercase tracking-[0.28em] ${
                              isActive ? "text-[#d8b56d]" : "text-[#9a7330]"
                            }`}
                          >
                            Shkallë banimi
                          </p>

                          <h3 className="mt-2 text-3xl font-semibold leading-tight">
                            {stair.name}
                          </h3>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
                              isActive
                                ? "bg-[#d8b56d] text-[#17130d]"
                                : "bg-[#17130d] text-white"
                            }`}
                          >
                            {stair.totalUnits} njësi
                          </span>

                          <span
                            className={`grid h-10 w-10 cursor-pointer shrink-0 place-items-center rounded-full transition ${
                              isActive
                                ? "bg-white/10 text-[#d8b56d]"
                                : "bg-[#f0e6d5] text-[#17130d] group-hover:bg-[#d8b56d]"
                            }`}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </aside>

          <section className="overflow-hidden rounded-[2.7rem] border border-black/10 bg-white/75 p-5 shadow-[0_30px_110px_rgba(55,38,15,0.12)] backdrop-blur-xl md:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStair.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative mb-7 h-85 overflow-hidden rounded-[2.2rem] md:h-105">
                  <img
                    src={selectedStair.image}
                    alt={selectedStair.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 text-white md:flex-row md:items-end">
                    <div>
                      <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d8b56d]">
                        Shkalla e zgjedhur
                      </p>
                      <h2 className="text-5xl font-semibold tracking-tighter">
                        {selectedStair.name}
                      </h2>
                    </div>

                    <div className="flex w-fit items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-xl">
                      <Layers3 className="h-5 w-5 text-[#d8b56d]" />
                      <span>{selectedStair.totalUnits} njësi banimi</span>
                    </div>
                  </div>
                </div>

                {/*  */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="mb-7 overflow-hidden rounded-4xl border border-[#9a7330]/20 bg-[#17130d] p-5 text-white shadow-[0_24px_80px_rgba(23,19,13,0.18)]"
                >
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                    <div className="flex items-start gap-4">
                      <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-[#d8b56d] text-[#17130d]">
                        <Car className="h-6 w-6" />
                      </span>

                      <div>
                        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#d8b56d]">
                          Parkime opsionale
                        </p>

                        <h3 className="text-2xl font-semibold tracking-tight">
                          Zgjidh vendparkimin për apartamentin tuaj
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                          Rezidenca ofron 31 njësi parkimi. Shikoni
                          planimetrinë, llojet dhe disponueshmërinë e parkimeve.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate("/parking")}
                      className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#d8b56d] px-6 py-3 font-semibold text-[#17130d] transition hover:bg-white"
                    >
                      Shiko parkimet
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>

                <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#9a7330]">
                      Njësitë e banimit
                    </p>
                    <h3 className="text-4xl font-semibold tracking-tighter">
                      {selectedStair.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 rounded-full bg-[#f1e6d4] px-5 py-3 text-sm text-[#62594d]">
                    <MousePointerClick className="h-4 w-4 text-[#9a7330]" />
                    Kliko një njësi për detaje
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {selectedStair.units.map((unit, index) => (
                    <motion.a
                      key={unit.id}
                      // href={`/apartamente/${selectedStair.slug}/${unit.slug}`}
                      initial={{ opacity: 0, y: 20 }}
                      onClick={() =>
                        navigate(
                          `/apartments/${selectedStair.slug}/${unit.slug}`,
                        )
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="group overflow-hidden rounded-4xl border border-black/10 bg-[#f8f1e6] shadow-[0_16px_50px_rgba(55,38,15,0.08)] transition hover:bg-white"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={unit.image}
                          alt={unit.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#17130d]">
                          {selectedStair.name}
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.28em] text-[#9a7330]">
                              Apartament
                            </p>
                            <h4 className="mt-2 text-2xl font-semibold">
                              {unit.name}
                            </h4>
                          </div>

                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#17130d] text-[#d8b56d]">
                            <Home className="h-5 w-5" />
                          </span>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
                          <span className="text-sm text-[#62594d]">
                            Shiko detajet
                          </span>

                          <span className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-[#17130d] text-white transition group-hover:bg-[#d8b56d] group-hover:text-[#17130d]">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      </section>
    </main>
  );
};
