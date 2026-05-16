import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { ResidenceHero } from './ResidenceHero';
import {
  PRINCIPLES,
  RESIDENCE_HIGHLIGHTS,
  RESIDENCE_STATS,
} from '../../constants/residence';
import { useTranslation } from 'react-i18next';
import { LivingExperience } from './LivingExperience';
import { Animate } from '../../components/Animate';

export const Residence = () => {
  const { t } = useTranslation('residence');
  const residenceStats = RESIDENCE_STATS(t);
  const principles = PRINCIPLES(t);
  const highlights = RESIDENCE_HIGHLIGHTS(t);
  return (
    <main className='min-h-screen bg-[#f3eee4] text-[#15120d]'>
      <ResidenceHero t={t} />

      <section className='px-6 pb-24'>
        <div className='mx-auto grid max-w-7xl gap-5 md:grid-cols-4'>
          {residenceStats.map((item) => (
            <Animate
              preset='fadeUp'
              className='rounded-4xl border border-[#15120d]/10 bg-white/70 p-6 shadow-[0_20px_70px_rgba(40,30,10,0.08)]'
            >
              <p className='text-4xl font-semibold tracking-[-0.04em]'>
                {item.value}
              </p>
              <p className='mt-3 text-sm leading-6 text-[#6a6257]'>
                {item.label}
              </p>
            </Animate>
          ))}
        </div>
      </section>

      <section className='px-6 pb-28'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]'>
          <div>
            <p className='mb-5 text-sm uppercase tracking-[0.35em] text-[#9b7837]'>
              {t('identityLabel')}
            </p>
            <h2 className='text-4xl font-semibold leading-tight tracking-tighter md:text-6xl'>
              {t('identityTitle')}
            </h2>
          </div>

          <div className='grid gap-4'>
            {principles.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className='flex items-center justify-between rounded-[1.7rem] border border-[#15120d]/10 bg-white/65 p-5'
              >
                <div className='flex items-center gap-4'>
                  <span className='grid h-10 w-10 place-items-center rounded-full bg-[#15120d] text-white'>
                    <Check className='h-4 w-4' />
                  </span>
                  <p className='font-medium'>{item}</p>
                </div>
                <ArrowUpRight className='h-5 w-5 text-[#9b7837]' />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#15120d] px-6 py-28 text-white'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-3'>
          {highlights.map((item) => (
            <div
              key={item.title}
              className='rounded-[2.2rem] border border-white/10 bg-white/6 p-8'
            >
              <item.icon className='mb-10 h-8 w-8 text-[#d8b56d]' />
              <h3 className='text-3xl font-semibold tracking-[-0.04em]'>
                {item.title}
              </h3>
              <p className='mt-4 leading-7 text-white/55'>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <LivingExperience t={t} />
    </main>
  );
};
