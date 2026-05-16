import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

export const ResidenceHero = ({ t }) => {
  return (
    <section className='relative overflow-hidden px-6 pb-24 pt-36'>
      <div className='absolute right-0 top-0 h-105 w-105 rounded-full bg-[#d8b56d]/25 blur-[110px]' />

      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]'>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          className='self-end'
        >
          <p className='mb-5 text-sm uppercase tracking-[0.35em] text-[#9b7837]'>
            {t('hero.label')}
          </p>

          <h1 className='max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl'>
            {t('hero.title')}
          </h1>

          <p className='mt-7 max-w-xl text-lg leading-8 text-[#5f574b]'>
            {t('hero.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(12% 0 12% 0 round 36px)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0% 0 round 36px)' }}
          transition={{ duration: 0.9 }}
          className='relative min-h-155 overflow-hidden rounded-[2.5rem]'
        >
          <img
            src='/images/concept.jpg'
            alt='Zoi Villa Residence'
            className='absolute inset-0 h-full w-full object-cover'
          />

          <div className='absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent' />

          <div className='absolute bottom-8 left-8 max-w-sm rounded-4xl bg-white/90 p-6 shadow-2xl backdrop-blur-xl'>
            <Building2 className='mb-4 h-6 w-6 text-[#9b7837]' />
            <h2 className='text-2xl font-semibold'>{t('hero.cardTitle')}</h2>
            <p className='mt-3 leading-7 text-[#6a6257]'>
              {t('hero.cardDescription')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
