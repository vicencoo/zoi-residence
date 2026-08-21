import { Animate } from "../../components/Animate";

export const VillasHero = ({ t }) => {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-36">
      <div className="relative mx-auto max-w-7xl">
        <Animate
          as="p"
          preset="fadeIn"
          delay={0.04}
          duration={0.03}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]"
        >
          {t("hero.label")}
        </Animate>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <Animate
            as="h1"
            preset="fadeUp"
            className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
          >
            {t("hero.title")}
          </Animate>

          <Animate
            as="p"
            preset="fadeUp"
            delay={0.08}
            className="max-w-xl text-lg leading-8 text-[#62594d]"
          >
            {t("hero.text")}
          </Animate>
        </div>
      </div>
    </section>
  );
};
