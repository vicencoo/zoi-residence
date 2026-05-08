import { Animate } from "../../components/Animate";
import { ParkingHero } from "./ParkingHero";
import { ParkingPlan } from "./ParkingPlan";
import { ParkingCard } from "./ParkingCard";
import { ParkingSidebar } from "./ParkingSidebar";

const parkingSpaces = Array.from({ length: 31 }, (_, index) => {
  const number = index + 1;
  const code = `P-${String(number).padStart(2, "0")}`;

  return {
    id: number,
    code,
    status: "Në shitje",
    type: "Vend parkimi standard",
    level: "-1",
    parkingArea: 12.5,
    sharedArea: 8.8,
    totalArea: 21.3,
    image: `/images/parkimi.jpg`,
  };
});

export const Parking = () => {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      {/*  */}
      <ParkingHero />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <ParkingPlan />

            <section>
              <Animate
                preset="fadeUp"
                className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end"
              >
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#9a7330]">
                    Njësitë e parkimit
                  </p>

                  <h2 className="text-4xl font-semibold tracking-tight">
                    31 vendparkime
                  </h2>
                </div>
              </Animate>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {parkingSpaces.map((parking, index) => (
                  <ParkingCard
                    parking={parking}
                    index={index}
                    key={parking.id}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Parking Sidebar */}
          <ParkingSidebar />
        </div>
      </section>
    </main>
  );
};
