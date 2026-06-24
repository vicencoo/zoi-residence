import { ArrowRight, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Animate } from "../../components/Animate";

const PARKING_INFO = (t) => [
  ["31", `${t("parking.cardInfo1")}`],
  ["12.5 m²", `${t("parking.cardInfo2")}`],
  ["8.8 m²", `${t("parking.cardInfo3")}`],
];

export const HomeParking = ({ t }) => {
  const navigate = useNavigate();
  const parkingInfo = PARKING_INFO(t);
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-10">
      <Animate
        threshold={0.25}
        duration={550}
        className="overflow-hidden rounded-[2.5rem] border border-[#9a7330]/20 bg-white/75 shadow-[0_35px_100px_rgba(55,38,15,0.12)] backdrop-blur-2xl"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-8 md:p-12">
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#d8b56d]/15 text-[#9a7330]">
              <Car className="h-7 w-7" />
            </div>

            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
              {t("parking.label")}
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
              {t("parking.title")}
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#62594d]">
              {t("parking.description")}
            </p>

            <button
              type="button"
              onClick={() => navigate("/parking")}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#d8b56d] px-7 py-4 font-semibold text-[#17130d] transition hover:bg-[#17130d] hover:text-white cursor-pointer"
            >
              {t("parking.button")}

              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
          </div>

          <div className="relative min-h-90">
            <img
              src="/images/parkimi.webp"
              alt="Planimetria e parkimeve"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width="1200"
              height="800"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/10 to-transparent lg:from-[#f4efe6]/80" />

            <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
              {parkingInfo.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-black/10 bg-white/80 p-4 backdrop-blur-xl shadow-[0_8px_24px_rgba(55,38,15,0.1)]"
                >
                  <p className="text-2xl font-semibold text-[#d8b56d]">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-[#62594d]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Animate>
    </section>
  );
};
