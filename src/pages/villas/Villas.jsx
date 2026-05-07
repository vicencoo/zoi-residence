import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Car,
  Home,
  Layers3,
  Maximize2,
  Trees,
  Waves,
} from "lucide-react";
import { villaRows } from "../../data/villas";
import { useNavigate } from "react-router-dom";

export const Villas = () => {
  const [selectedRow, setSelectedRow] = useState(villaRows[0]);
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#0f120d] text-white">
      <section className="relative overflow-hidden px-6 pb-16 pt-36">
        <div className="absolute -right-40 top-20 h-130 w-130 rounded-full bg-emerald-400/10 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-115 w-115 rounded-full bg-[#d8b56d]/15 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d8b56d]">
            Vilat
          </p>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
            >
              Vila private të organizuara sipas rrjeshtave.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="max-w-xl text-lg leading-8 text-white/55"
            >
              Zgjidhni rrjeshtin T-01, T-02 ose T-03 për të parë vilat
              përkatëse. Çdo vilë mund të hapet më vonë në faqen e saj të
              detajeve.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
          <aside className="space-y-5">
            <div className="rounded-4xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d8b56d] text-[#0f120d]">
                  <Home className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-white/45">Organizimi</p>
                  <h2 className="text-xl font-semibold">3 rrjeshta vilash</h2>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {villaRows.map((row, index) => {
                const isActive = selectedRow.id === row.id;

                return (
                  <motion.button
                    key={row.id}
                    onClick={() => setSelectedRow(row)}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className={`group h-47.5 overflow-hidden rounded-4xl border p-4 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-[#d8b56d] bg-[#d8b56d] text-[#0f120d]"
                        : "border-white/10 bg-white/6 text-white hover:bg-white/9"
                    }`}
                  >
                    <div className="grid h-full gap-4 sm:grid-cols-[150px_1fr]">
                      <div className="relative h-full overflow-hidden rounded-[1.45rem]">
                        <img
                          src={row.image}
                          alt={row.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
                      </div>

                      <div className="flex min-h-0 flex-col justify-between py-1">
                        <div>
                          <p
                            className={`text-xs uppercase tracking-[0.28em] ${
                              isActive ? "text-black/55" : "text-[#d8b56d]"
                            }`}
                          >
                            Rrjesht vilash
                          </p>

                          <h3 className="mt-2 text-3xl font-semibold leading-tight">
                            {row.name}
                          </h3>

                          <p
                            className={`mt-2 line-clamp-2 text-sm leading-6 ${
                              isActive ? "text-black/60" : "text-white/45"
                            }`}
                          >
                            {row.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
                              isActive
                                ? "bg-[#0f120d] text-white"
                                : "bg-[#d8b56d] text-[#0f120d]"
                            }`}
                          >
                            {row.totalVillas} vila
                          </span>

                          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </aside>

          <section className="overflow-hidden rounded-[2.7rem] border border-white/10 bg-white/6 p-5 shadow-[0_35px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRow.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative mb-7 h-85 overflow-hidden rounded-[2.2rem] md:h-105">
                  <img
                    src={selectedRow.image}
                    alt={selectedRow.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div>
                      <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d8b56d]">
                        Rrjeshti i zgjedhur
                      </p>
                      <h2 className="text-5xl font-semibold tracking-tighter">
                        {selectedRow.name}
                      </h2>
                      <p className="mt-3 max-w-xl leading-7 text-white/60">
                        {selectedRow.description}
                      </p>
                    </div>

                    <div className="flex w-fit items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-xl">
                      <Home className="h-5 w-5 text-[#d8b56d]" />
                      <span>{selectedRow.totalVillas} vila</span>
                    </div>
                  </div>
                </div>

                <div className="mb-7">
                  <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d8b56d]">
                    Vilat në këtë rrjesht
                  </p>
                  <h3 className="text-4xl font-semibold tracking-tighter">
                    {selectedRow.title}
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {selectedRow.villas.map((villa, index) => (
                    <motion.a
                      key={villa.id}
                      // href={`/view-villa/${villa.slug}`}
                      onClick={() => navigate(`/view-villa/${villa.id}`)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="group overflow-hidden rounded-4xl border border-white/10 bg-[#171a13] transition hover:border-[#d8b56d]/50"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={villa.images[0]}
                          alt={villa.name}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                        <span className="absolute left-4 top-4 rounded-full bg-[#d8b56d] px-4 py-2 text-xs font-semibold text-[#0f120d]">
                          {villa.status}
                        </span>
                      </div>

                      <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.28em] text-[#d8b56d]">
                          {villa.row}
                        </p>

                        <div className="mt-2 flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-2xl font-semibold">
                              {villa.name}
                            </h4>
                            <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/45">
                              {villa.shortDescription}
                            </p>
                          </div>

                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-[#d8b56d]">
                            <Home className="h-5 w-5" />
                          </span>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/55">
                          <span className="flex items-center gap-2">
                            <Maximize2 className="h-4 w-4 text-[#d8b56d]" />
                            {villa.area} m²
                          </span>
                          <span className="flex items-center gap-2">
                            <Trees className="h-4 w-4 text-[#d8b56d]" />
                            {villa.landArea} m²
                          </span>
                          <span className="flex items-center gap-2">
                            <BedDouble className="h-4 w-4 text-[#d8b56d]" />
                            {villa.bedrooms} dhoma
                          </span>
                          <span className="flex items-center gap-2">
                            <Bath className="h-4 w-4 text-[#d8b56d]" />
                            {villa.bathrooms} tualete
                          </span>
                          <span className="flex items-center gap-2">
                            <Car className="h-4 w-4 text-[#d8b56d]" />
                            {villa.parking} parkime
                          </span>
                          <span className="flex items-center gap-2">
                            <Layers3 className="h-4 w-4 text-[#d8b56d]" />
                            {villa.floors} kate
                          </span>
                        </div>

                        {villa.hasPool && (
                          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d8b56d]/10 px-4 py-2 text-sm text-[#d8b56d]">
                            <Waves className="h-4 w-4" />
                            Pishinë private
                          </div>
                        )}

                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                          <span
                            className="text-sm text-white/45"
                            onClick={() => navigate(`/view-villa/${villa.id}`)}
                          >
                            Shiko detajet
                          </span>

                          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d8b56d] text-[#0f120d] transition group-hover:translate-x-1">
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
