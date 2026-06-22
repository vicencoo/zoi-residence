import { useNavigate } from "react-router-dom";
import { Animate } from "../../components/Animate";
import { ArrowLeft, Car } from "lucide-react";

export const ParkingHero = ({ t }) => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-36">
      <div className="absolute -right-40 top-20 h-120 w-120 rounded-full bg-[#d8b56d]/30 blur-[130px]" />
      <div className="absolute -left-40 bottom-0 h-105 w-105 rounded-full bg-[#17130d]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <button
          onClick={() => navigate("/apartments")}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#62594d] transition hover:bg-white hover:text-[#17130d] cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("hero.backToAppartments")}
        </button>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <Animate
              as="p"
              preset="fadeIn"
              className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]"
            >
              {t("hero.title")}
            </Animate>

            <Animate
              as="h1"
              preset="fadeUp"
              delay={0.05}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
            >
              {t("hero.chooseParkingText")}
            </Animate>

            <Animate
              as="p"
              preset="fadeUp"
              delay={0.12}
              className="mt-6 max-w-2xl text-lg leading-8 text-[#62594d]"
            >
              {t("hero.parkingDescription")}
            </Animate>
          </div>

          <Animate
            preset="fadeUp"
            delay={0.16}
            className="rounded-4xl bg-[#17130d] p-6 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/75">{t("hero.totalText")}</p>
                <h2 className="text-5xl font-semibold text-[#d8b56d]">31</h2>
                <p className="mt-1 text-white/75">{t("hero.parkingsText")}</p>
              </div>

              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-[#d8b56d]">
                <Car className="h-8 w-8" />
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-sm text-white/75">{t("hero.parking")}</p>
                <strong>12.5 m²</strong>
              </div>

              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-sm text-white/75">{t("hero.commonText")}</p>
                <strong>8.8 m²</strong>
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
