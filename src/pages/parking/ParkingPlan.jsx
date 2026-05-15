import { Map } from "lucide-react";
import { Animate } from "../../components/Animate";

export const ParkingPlan = ({ t }) => {
  return (
    <Animate
      preset="scaleUp"
      className="overflow-hidden rounded-[2.6rem] border border-black/10 bg-white/75 p-5 shadow-[0_30px_110px_rgba(55,38,15,0.12)]"
    >
      <div className="relative min-h-107.5 overflow-hidden rounded-4xl bg-[#17130d]">
        <img
          src="/images/parkimi.jpg"
          alt="Planimetria e parkimeve"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 text-white md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
              {/* Planimetria */}
              {t("parkingPlan.label")}
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              {/* Organizimi i parkimeve */}
              {t("parkingPlan.title")}
            </h2>

            <p className="mt-3 max-w-2xl text-white/65">
              {/* Shikoni planin e përgjithshëm të parkimeve dhe më poshtë çdo njësi
              individuale. */}
              {t("parkingPlan.text")}
            </p>
          </div>

          <span className="flex w-fit items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-xl">
            <Map className="h-5 w-5 text-[#d8b56d]" />
            {/* Niveli -1 */}
            {t("parkingPlan.level")}
          </span>
        </div>
      </div>
    </Animate>
  );
};
