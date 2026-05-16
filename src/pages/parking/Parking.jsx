import { Animate } from '../../components/Animate';
import { ParkingHero } from './ParkingHero';
import { ParkingPlan } from './ParkingPlan';
import { ParkingCard } from './ParkingCard';
import { ParkingSidebar } from './ParkingSidebar';
import { useTranslation } from 'react-i18next';

const Parking_Spaces = (t) =>
  Array.from({ length: 31 }, (_, index) => {
    const number = index + 1;
    const code = `P-${String(number).padStart(2, '0')}`;

    return {
      id: number,
      code,
      status: `${t('parkingSpaces.status')}`,
      type: `${t('parkingSpaces.type')}`,
      level: '-1',
      parkingArea: 12.5,
      sharedArea: 8.8,
      totalArea: 21.3,
      image: `/images/parkings/parking-${number}.jpg`,
    };
  });

export const Parking = () => {
  const { t } = useTranslation('parking');
  const parkingSpaces = Parking_Spaces(t);
  return (
    <main className='min-h-screen bg-[#f4efe6] text-[#17130d]'>
      {/*  */}
      <ParkingHero t={t} />

      <section className='px-6 pb-28'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]'>
          <div className='space-y-8'>
            <ParkingPlan t={t} />

            <section>
              <Animate
                preset='fadeUp'
                className='mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end'
              >
                <div>
                  <p className='mb-3 text-sm uppercase tracking-[0.32em] text-[#9a7330]'>
                    {/* Njësitë e parkimit */}
                    {t('parkingUnitsText')}
                  </p>

                  <h2 className='text-4xl font-semibold tracking-tight'>
                    {/* 31 vendparkime */}
                    {t('parkingUnits')}
                  </h2>
                </div>
              </Animate>

              <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
                {parkingSpaces.map((parking, index) => (
                  <ParkingCard
                    parking={parking}
                    index={index}
                    t={t}
                    key={parking.id}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Parking Sidebar */}
          <ParkingSidebar t={t} />
        </div>
      </section>
    </main>
  );
};
