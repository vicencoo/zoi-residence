import { FEATURES } from "../../constants/features";
import { Animate } from "../../components/Animate";

export const Features = ({ isMobile, t }) => {
  const features = FEATURES(t);
  return (
    <section
      id="residencconst"
      className="relative z-10 mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
            {t("features.label")}
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
            {t("features.title")}
          </h2>
        </div>
        <p className="max-w-md text-[#62594d]">{t("features.description")}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <Animate
            key={item.title}
            delay={isMobile ? 0 : index * 80}
            className="group rounded-4xl border border-black/10 bg-white/75 p-6 shadow-[0_16px_50px_rgba(55,38,15,0.07)] backdrop-blur-xl transition transform-3d hover:border-[#9a7330]/30 hover:bg-white md:hover:-translate-y-2.5 md:hover:rotate-x-[6deg] md:hover:-rotate-y-[6deg]"
          >
            <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-[#d8b56d]/15 text-[#9a7330] transition group-hover:scale-110">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#17130d]">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-[#62594d]">{item.text}</p>
          </Animate>
        ))}
      </div>
    </section>
  );
};
