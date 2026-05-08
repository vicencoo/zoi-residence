import { Animate } from "../../components/Animate";

export const ApartmentsHero = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-36">
      <div className="absolute -right-40 top-24 h-130 w-130 rounded-full bg-[#d6b46d]/25 blur-[130px]" />
      <div className="absolute -left-40 bottom-0 h-105 w-105 rounded-full bg-[#17130d]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <Animate
          as="p"
          preset="fadeIn"
          className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]"
        >
          Apartamentet
        </Animate>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <Animate
            as="h1"
            preset="fadeUp"
            delay={0.05}
            className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
          >
            Zgjidh shkallën dhe eksploro njësitë e banimit.
          </Animate>

          <Animate
            as="p"
            preset="fadeUp"
            delay={0.12}
            className="max-w-xl text-lg leading-8 text-[#62594d]"
          >
            Apartamentet janë të organizuara në 4 shkallë banimi. Çdo shkallë ka
            njësitë e saj, të prezantuara qartë për një eksperiencë të thjeshtë
            dhe elegante.
          </Animate>
        </div>
      </div>
    </section>
  );
};
