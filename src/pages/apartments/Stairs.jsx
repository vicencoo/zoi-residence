import { ArrowRight } from "lucide-react";

export const Stairs = ({ handleStairSelect, stair, isActive, t }) => {
  return (
    <button
      onClick={() => handleStairSelect(stair)}
      className={`group h-48 w-full overflow-hidden rounded-4xl border p-4 text-left shadow-[0_20px_70px_rgba(55,38,15,0.08)] transition-all duration-300 hover:-translate-y-1 ${
        isActive
          ? "border-[#9a7330] bg-[#17130d] text-white"
          : "border-black/10 bg-white/75 text-[#17130d] hover:bg-white"
      }`}
    >
      <div className="grid h-full gap-4 grid-cols-[150px_1fr]">
        <div className="relative h-full overflow-hidden rounded-[1.45rem]">
          <img
            src={stair.image}
            loading="lazy"
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
              {t("stairs.title")}
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
              {stair.totalUnits} {t("stairs.unit")}
            </span>

            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition cursor-pointer ${
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
    </button>
  );
};
