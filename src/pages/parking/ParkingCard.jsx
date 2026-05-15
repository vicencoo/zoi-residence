import { Car } from "lucide-react";
import { Animate } from "../../components/Animate";

export const ParkingCard = ({ parking, index, t }) => {
  return (
    <Animate
      preset="fadeUp"
      delay={index * 0.015}
      className="group overflow-hidden rounded-4xl border border-black/10 bg-white/75 shadow-[0_16px_50px_rgba(55,38,15,0.07)] transition hover:-translate-y-1.5 hover:bg-white"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={parking.image}
          alt={parking.code}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#17130d]">
          {parking.type}
        </span>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#d8b56d]">
              {t("parkingCard.parkingLabel")}
            </p>

            <h3 className="mt-2 text-3xl font-semibold">{parking.code}</h3>
          </div>

          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-xl">
            <Car className="h-6 w-6 text-[#d8b56d]" />
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#f4efe6] p-4">
            <p className="text-xs text-[#62594d]">
              {t("parkingCard.parkingSpace")}
            </p>
            <strong>{parking.parkingArea} m²</strong>
          </div>

          <div className="rounded-2xl bg-[#f4efe6] p-4">
            <p className="text-xs text-[#62594d]">{t("parkingCard.common")}</p>
            <strong>{parking.sharedArea} m²</strong>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-5">
          <span className="rounded-full bg-[#e8dac0] px-4 py-2 text-sm font-semibold text-[#17130d]">
            {parking.status}
          </span>

          <span className="text-sm text-[#62594d]">
            {t("parkingCard.total")} {parking.totalArea} m²
          </span>
        </div>
      </div>
    </Animate>
  );
};
