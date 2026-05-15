import { useNavigate } from "react-router-dom";
import { Animate } from "../../components/Animate";
import { ArrowRight, Check } from "lucide-react";
import { PARKING_INCLUDED, PARKING_INFO } from "../../constants/parkingInfo";

export const ParkingSidebar = ({ t }) => {
  const navigate = useNavigate();
  const parkingInfo = PARKING_INFO(t);
  const parkingIncluded = PARKING_INCLUDED(t);
  return (
    <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
      <Animate
        preset="slideRight"
        className="rounded-[2.2rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.1)]"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
          {t("parkingSidebar.summary")}
        </p>

        <div className="space-y-4">
          {parkingInfo.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-black/10 pb-3"
            >
              <span className="text-[#62594d]">{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </Animate>

      <Animate
        preset="slideRight"
        delay={0.08}
        className="rounded-[2.2rem] bg-[#17130d] p-6 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)]"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
          {t("parkingSidebar.contact.title")}
        </p>

        <h3 className="mt-3 text-3xl font-semibold tracking-tight">
          {t("parkingSidebar.contact.text")}
        </h3>

        <p className="mt-4 leading-7 text-white/60">
          {t("parkingSidebar.contact.description")}
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d8b56d] px-6 py-4 font-semibold text-[#17130d] transition hover:bg-white cursor-pointer"
        >
          {t("parkingSidebar.contact.button")}
          <ArrowRight className="h-4 w-4" />
        </button>
      </Animate>

      <Animate
        preset="slideRight"
        delay={0.16}
        className="rounded-[2.2rem] border border-black/10 bg-white/75 p-6"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
          {t("parkingSidebar.included.label")}
        </p>

        {parkingIncluded.map((item) => (
          <div key={item} className="mb-3 flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#17130d] text-[#d8b56d]">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-[#62594d]">{item}</span>
          </div>
        ))}
      </Animate>
    </aside>
  );
};
