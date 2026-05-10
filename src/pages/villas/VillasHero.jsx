import { Animate } from '../../components/Animate';

export const VillasHero = () => {
  return (
    <section className='relative overflow-hidden px-6 pb-16 pt-36'>
      <div className='absolute -right-40 top-20 h-130 w-130 rounded-full bg-[#d8b56d]/30 blur-[130px]' />
      <div className='absolute -left-40 bottom-0 h-115 w-115 rounded-full bg-[#17130d]/10 blur-[120px]' />

      <div className='relative mx-auto max-w-7xl'>
        <Animate
          as='p'
          preset='fadeIn'
          delay={0.04}
          duration={0.03}
          className='mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]'
        >
          Vilat
        </Animate>

        <div className='grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end'>
          <Animate
            as='h1'
            preset='fadeUp'
            className='max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl'
          >
            Vila private të organizuara sipas rrjeshtave.
          </Animate>

          <Animate
            as='p'
            preset='fadeUp'
            delay={0.08}
            className='max-w-xl text-lg leading-8 text-[#62594d]'
          >
            Zgjidhni rrjeshtin T-01, T-02 ose T-03 për të parë vilat përkatëse.
            Çdo vilë mund të hapet në faqen e saj të detajeve.
          </Animate>
        </div>
      </div>
    </section>
  );
};
