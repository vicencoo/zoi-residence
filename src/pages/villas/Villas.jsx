import { useState } from "react";
import { ArrowRight, Home } from "lucide-react";
import { getVillaRowsPreview } from "../../data/villas";
import { VillaCard } from "./VillaCard";
import { Animate } from "../../components/Animate";

export const Villas = () => {
  const rows = getVillaRowsPreview();
  const [selectedRow, setSelectedRow] = useState(rows[0]);
  const [animKey, setAnimKey] = useState(0);

  const handleRowSelect = (row) => {
    setSelectedRow(row);
    setAnimKey((k) => k + 1);
  };

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      <section className="relative overflow-hidden px-6 pb-16 pt-36">
        <div className="absolute -right-40 top-20 h-130 w-130 rounded-full bg-[#d8b56d]/30 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-115 w-115 rounded-full bg-[#17130d]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Animate
            as="p"
            preset="fadeIn"
            delay={0.04}
            duration={0.03}
            skipAnimation
            className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]"
          >
            Vilat
          </Animate>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <Animate
              as="h1"
              preset="fadeUp"
              skipAnimation
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
            >
              Vila private të organizuara sipas rrjeshtave.
            </Animate>

            <Animate
              as="p"
              preset="fadeUp"
              delay={0.08}
              skipAnimation
              className="max-w-xl text-lg leading-8 text-[#62594d]"
            >
              Zgjidhni rrjeshtin T-01, T-02 ose T-03 për të parë vilat
              përkatëse. Çdo vilë mund të hapet më vonë në faqen e saj të
              detajeve.
            </Animate>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
          <aside className="space-y-5">
            <Animate
              preset="fadeUp"
              skipAnimation
              className="rounded-4xl border border-black/10 bg-white/80 p-5 shadow-[0_16px_50px_rgba(55,38,15,0.07)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#17130d] text-[#d8b56d]">
                  <Home className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-[#62594d]">Organizimi</p>
                  <h2 className="text-xl font-semibold text-[#17130d]">
                    3 rrjeshta vilash
                  </h2>
                </div>
              </div>
            </Animate>

            <div className="grid gap-4">
              {rows.map((row, index) => {
                const isActive = selectedRow.id === row.id;

                return (
                  <Animate
                    key={row.id}
                    as="button"
                    preset="slideLeft"
                    delay={index * 0.06}
                    skipAnimation={index === 0}
                    onClick={() => handleRowSelect(row)}
                    className={`group h-47.5 w-full overflow-hidden rounded-4xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
                      isActive
                        ? "border-[#17130d] bg-[#17130d] text-white"
                        : "border-black/10 bg-white/75 text-[#17130d] hover:bg-white"
                    }`}
                  >
                    <div className="grid h-full gap-4 sm:grid-cols-[150px_1fr]">
                      <div className="relative h-full overflow-hidden rounded-[1.45rem]">
                        <img
                          src={row.image}
                          alt={row.name}
                          loading="eager"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
                      </div>

                      <div className="flex min-h-0 flex-col justify-between py-1">
                        <div>
                          <p
                            className={`text-xs uppercase tracking-[0.28em] ${isActive ? "text-[#d8b56d]" : "text-[#9a7330]"}`}
                          >
                            Rrjesht vilash
                          </p>
                          <h3 className="mt-2 text-3xl font-semibold leading-tight">
                            {row.name}
                          </h3>
                          <p
                            className={`mt-2 line-clamp-2 text-sm leading-6 ${isActive ? "text-white/60" : "text-[#62594d]"}`}
                          >
                            {row.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
                              isActive
                                ? "bg-[#d8b56d] text-[#17130d]"
                                : "bg-[#17130d] text-[#d8b56d]"
                            }`}
                          >
                            {row.totalVillas} vila
                          </span>
                          <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Animate>
                );
              })}
            </div>
          </aside>

          <section className="overflow-hidden rounded-[2.7rem] border border-black/10 bg-white/75 p-5 shadow-[0_35px_120px_rgba(55,38,15,0.12)] md:p-7">
            <Animate key={animKey} preset="fadeIn" duration={0.2} skipAnimation>
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
                    <h2 className="text-5xl font-semibold tracking-tighter text-white">
                      {selectedRow.name}
                    </h2>
                    <p className="mt-3 max-w-xl leading-7 text-white/60">
                      {selectedRow.description}
                    </p>
                  </div>

                  <div className="flex w-fit items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 text-white">
                    <Home className="h-5 w-5 text-[#d8b56d]" />
                    <span>{selectedRow.totalVillas} vila</span>
                  </div>
                </div>
              </div>

              <div className="mb-7">
                <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#9a7330]">
                  Vilat në këtë rrjesht
                </p>
                <h3 className="text-4xl font-semibold tracking-tighter text-[#17130d]">
                  {selectedRow.title}
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {selectedRow.villas.map((villa, index) => (
                  <VillaCard villa={villa} index={index} key={villa.id} />
                ))}
              </div>
            </Animate>
          </section>
        </div>
      </section>
    </main>
  );
};
