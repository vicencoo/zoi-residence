import { Home } from "lucide-react";
import { VillaCard } from "./VillaCard";
import { Animate } from "../../components/Animate";
import { VillaRows } from "./VillaRows";
import { useVillas } from "./useVillas";
import { VillasHero } from "./VillasHero";
import { useTranslation } from "react-i18next";

export const Villas = () => {
  const { animKey, handleRowSelect, selectedRow, villaRows } = useVillas();
  const { t } = useTranslation("villas");

  console.log("selectedRow:", selectedRow);

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      <VillasHero t={t} />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
          <aside className="space-y-5">
            <Animate
              preset="fadeUp"
              className="rounded-4xl border border-black/10 bg-white/80 p-5 shadow-[0_16px_50px_rgba(55,38,15,0.07)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#17130d] text-[#d8b56d]">
                  <Home className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-[#62594d]">
                    {t("organization.title")}
                  </p>
                  <h2 className="text-xl font-semibold text-[#17130d]">
                    {t("organization.text")}
                  </h2>
                </div>
              </div>
            </Animate>

            <Animate preset="slideLeft">
              <div className="grid gap-4">
                {villaRows.map((row, index) => {
                  const isActive = selectedRow.id === row.id;

                  return (
                    <VillaRows
                      handleRowSelect={handleRowSelect}
                      index={index}
                      isActive={isActive}
                      row={row}
                      t={t}
                      key={row.id}
                    />
                  );
                })}
              </div>
            </Animate>
          </aside>

          <section className="overflow-hidden rounded-[2.7rem] border border-black/10 bg-white/75 p-5 shadow-[0_35px_120px_rgba(55,38,15,0.12)] md:p-7">
            {/* <Animate key={animKey} preset="fadeIn" duration={0.2}> */}
            <div className="relative mb-7 h-85 overflow-hidden rounded-[2.2rem] md:h-105">
              <img
                src={selectedRow.image}
                alt={selectedRow.title}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-[0.32em] text-[#ffcf70]">
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
            <Animate key={animKey} preset="fadeIn" duration={0.2}>
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
                  <VillaCard villa={villa} index={index} t={t} key={villa.id} />
                ))}
              </div>
            </Animate>
          </section>
        </div>
      </section>
    </main>
  );
};
