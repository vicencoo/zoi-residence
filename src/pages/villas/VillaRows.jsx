import { ArrowRight } from "lucide-react";

export const VillaRows = ({ row, handleRowSelect, isActive }) => {
  return (
    <button
      onClick={() => handleRowSelect(row)}
      className={`group h-47.5 w-full overflow-hidden rounded-4xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
        isActive
          ? "border-[#17130d] bg-[#17130d] text-white"
          : "border-black/10 bg-white/75 text-[#17130d] hover:bg-white"
      }`}
    >
      <div className="grid h-full gap-4 grid-cols-[150px_1fr]">
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
          <div className="flex flex-col gap-2">
            <p
              className={`text-xs uppercase tracking-[0.28em] ${isActive ? "text-[#d8b56d]" : "text-[#9a7330]"}`}
            >
              Rrjesht vilash
            </p>
            <h3 className="text-3xl font-semibold leading-tight">{row.name}</h3>
            <p
              className={`line-clamp-2 text-sm leading-4 ${isActive ? "text-white/60" : "text-[#62594d]"}`}
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
    </button>
  );
};
