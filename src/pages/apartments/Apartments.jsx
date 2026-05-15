import {
  ArrowRight,
  Building2,
  Layers3,
  MousePointerClick,
  Car,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Animate } from "../../components/Animate";
import { Stairs } from "./Stairs";
import { ApartmentCard } from "./ApartmentCard";
import { useApartments } from "./useApartments";
import { ApartmentsHero } from "./ApartmentsHero";
import { useTranslation } from "react-i18next";

export const Apartments = () => {
  const navigate = useNavigate();
  const { animKey, handleStairSelect, selectedStair, apartmentStairs } =
    useApartments();
  const { t } = useTranslation("apartments");

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      <ApartmentsHero t={t} />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
          <aside className="space-y-5">
            <Animate
              preset="fadeUp"
              className="rounded-4xl border border-black/10 bg-white/65 p-5 shadow-[0_24px_80px_rgba(55,38,15,0.08)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#17130d] text-[#d8b56d]">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-[#62594d]"> {t("organization")}</p>
                  <h2 className="text-xl font-semibold">{t("totalStairs")}</h2>
                </div>
              </div>
            </Animate>

            <Animate preset="slideLeft">
              <div className="grid gap-4">
                {apartmentStairs.map((stair, index) => {
                  const isActive = selectedStair.id === stair.id;
                  return (
                    <Stairs
                      handleStairSelect={handleStairSelect}
                      index={index}
                      isActive={isActive}
                      stair={stair}
                      t={t}
                      key={stair.id}
                    />
                  );
                })}
              </div>
            </Animate>
          </aside>

          <section className="overflow-hidden rounded-[2.7rem] border border-black/10 bg-white/75 p-5 shadow-[0_30px_110px_rgba(55,38,15,0.12)] backdrop-blur-xl md:p-7">
            {/* <Animate key={animKey} preset="fadeIn" duration={0.2}> */}
            <div className="relative mb-7 h-85 overflow-hidden rounded-[2.2rem] md:h-105">
              <img
                src={selectedStair.image}
                alt={selectedStair.name}
                fetchPriority="high"
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 text-white md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#d8b56d]">
                    {t("selectedStairLabel")}
                  </p>
                  <h2 className="text-5xl font-semibold tracking-tighter">
                    {selectedStair.name}
                  </h2>
                </div>

                <div className="flex w-fit items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-xl">
                  <Layers3 className="h-5 w-5 text-[#d8b56d]" />
                  <span>
                    {selectedStair.totalUnits} {t("totalUnitsLabel")}
                  </span>
                </div>
              </div>
            </div>
            <Animate key={animKey} preset="fadeIn" duration={0.2}>
              <div className="mb-7 overflow-hidden rounded-4xl border border-[#9a7330]/20 bg-[#17130d] p-5 text-white shadow-[0_24px_80px_rgba(23,19,13,0.18)]">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                  <div className="flex items-start gap-4">
                    <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-[#d8b56d] text-[#17130d]">
                      <Car className="h-6 w-6" />
                    </span>

                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#d8b56d]">
                        {t("parking.label")}
                      </p>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {t("parking.title")}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
                        {t("parking.text")}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/parking")}
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#d8b56d] px-6 py-3 font-semibold text-[#17130d] transition hover:bg-white cursor-pointer"
                  >
                    {t("parking.button")}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#9a7330]">
                    {/* Njësitë e banimit */}
                    {t("residentialUnitsLabel")}
                  </p>
                  <h3 className="text-4xl font-semibold tracking-tighter">
                    {selectedStair.name}
                  </h3>
                </div>

                <div className="flex items-center gap-3 rounded-full bg-[#f1e6d4] px-5 py-3 text-sm text-[#62594d]">
                  <MousePointerClick className="h-4 w-4 text-[#9a7330]" />
                  {/* Kliko një njësi për detaje */}
                  {t("selectUnitInstruction")}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {selectedStair.units.map((unit, index) => (
                  <ApartmentCard
                    index={index}
                    selectedStair={selectedStair}
                    unit={unit}
                    t={t}
                    key={unit.id}
                  />
                ))}
              </div>
            </Animate>
          </section>
        </div>
      </section>
    </main>
  );
};
