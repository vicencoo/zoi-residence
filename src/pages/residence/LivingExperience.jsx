import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LivingExperience = ({ t }) => {
  const navigate = useNavigate();
  return (
    <section className="px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-140 overflow-hidden rounded-[2.5rem]">
          <img
            src="/images/living-experience.webp"
            alt="Arkitekturë rezidenciale"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center rounded-[2.5rem] bg-[#e6dccb] p-8 md:p-12">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9b7837]">
            {t("livingExperience.label")}
          </p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tighter md:text-6xl">
            {t("livingExperience.title")}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#62594d]">
            {t("livingExperience.description")}
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-9 inline-flex w-fit items-center gap-3 cursor-pointer rounded-full bg-[#15120d] px-7 py-4 font-semibold text-white transition hover:bg-[#9b7837]"
          >
            {t("livingExperience.button")}
            <MoveRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
