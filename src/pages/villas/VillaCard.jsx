import { useNavigate } from "react-router-dom";
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
import { Animate } from "../../components/Animate";

export const VillaCard = ({ villa, index, t }) => {
  const navigate = useNavigate();

  const isSold =
    villa.status?.toLowerCase() === "e shitur" ||
    villa.status?.toLowerCase() === "sold out";

  return (
    <Animate
      as="article"
      preset="fadeUp"
      delay={index * 0.05}
      onClick={() => navigate(`/villas/${villa.id}`)}
      className="group cursor-pointer overflow-hidden rounded-4xl border border-black/10 bg-white/75 shadow-[0_16px_50px_rgba(55,38,15,0.07)] transition duration-300 hover:-translate-y-2 hover:bg-white"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={villa.images[0]}
          alt={villa.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        {/* <span className='absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#17130d]'>
          {villa.status}
        </span> */}
        <span
          className={`absolute left-4 top-4 rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-sm ${isSold ? "bg-red-100/90 text-red-700" : "bg-emerald-100/90 text-emerald-700"}`}
        >
          {" "}
          {villa.status}{" "}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-[#9a7330]">
          {villa.row}
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            <h4 className="text-2xl font-semibold text-[#17130d]">
              {villa.name}
            </h4>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#62594d]">
              {villa.shortDescription}
            </p>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#17130d] text-[#d8b56d]">
            <Home className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-[#62594d]">
          <span className="flex items-center gap-2">
            <Maximize2 className="h-4 w-4 text-[#9a7330]" />
            {villa.area} m²
          </span>
          <span className="flex items-center gap-2">
            <Trees className="h-4 w-4 text-[#9a7330]" />
            {villa.landArea} m²
          </span>
          <span className="flex items-center gap-2">
            <BedDouble className="h-4 w-4 text-[#9a7330]" />
            {villa.bedrooms} {t("villaCard.rooms")}
          </span>
          <span className="flex items-center gap-2">
            <Bath className="h-4 w-4 text-[#9a7330]" />
            {villa.bathrooms} {t("villaCard.toilets")}
          </span>
          <span className="flex items-center gap-2">
            <Car className="h-4 w-4 text-[#9a7330]" />
            {villa.parking.total} {t("villaCard.parkings")}
          </span>
          <span className="flex items-center gap-2">
            <Layers3 className="h-4 w-4 text-[#9a7330]" />
            {villa.floors} {t("villaCard.floors")}
          </span>
        </div>

        {villa.hasPool && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e8dac0] px-4 py-2 text-sm font-medium text-[#17130d]">
            <Waves className="h-4 w-4 text-[#9a7330]" />
            {t("villaCard.hasPool")}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
          <span className="text-sm text-[#62594d]">
            {t("villaCard.viewVllaDetails")}
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#17130d] text-[#d8b56d] transition duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Animate>
  );
};
