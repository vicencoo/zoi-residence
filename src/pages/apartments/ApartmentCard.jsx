import { useNavigate } from "react-router-dom";
import { Animate } from "../../components/Animate";
import { ArrowRight, Home } from "lucide-react";

export const ApartmentCard = ({ unit, index, selectedStair }) => {
  const navigate = useNavigate();
  console.log(unit);

  return (
    <Animate
      as="article"
      preset="fadeUp"
      delay={index * 0.05}
      onClick={() => navigate(`/apartments/${selectedStair.slug}/${unit.slug}`)}
      className="group cursor-pointer overflow-hidden rounded-4xl border border-black/10 bg-[#f8f1e6] shadow-[0_16px_50px_rgba(55,38,15,0.08)] transition duration-300 hover:-translate-y-2 hover:bg-white"
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
            <h4 className="mt-2 text-2xl font-semibold">{unit.name}</h4>
          </div>

          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#17130d] text-[#d8b56d]">
            <Home className="h-5 w-5" />
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5">
          <span className="text-sm text-[#62594d]">Shiko detajet</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#17130d] text-white transition duration-300 group-hover:bg-[#d8b56d] group-hover:text-[#17130d]">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Animate>
  );
};
