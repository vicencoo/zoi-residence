import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bath,
  BedDouble,
  Check,
  Compass,
  Layers3,
  Maximize2,
  Ruler,
  SquareParking,
} from "lucide-react";
import { useViewApartment } from "./useViewApartment";
import { AparmentImages } from "./ApartmentImages";
import { ApartmentSidebar } from "./ApartmentSidebar";
import { ApartmentHero } from "./ApartmentHero";

export const ViewApartment = () => {
  const navigate = useNavigate();
  const { activeImage, apartment, handleChangeImage } = useViewApartment();

  if (!apartment) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f4efe6] px-6 text-[#17130d]">
        <div className="max-w-xl rounded-4xl bg-white p-10 text-center shadow-xl">
          <h1 className="text-3xl font-semibold">Apartamenti nuk u gjet.</h1>
          <button
            onClick={() => navigate("/apartments")}
            className="mt-6 rounded-full bg-[#17130d] px-6 py-3 text-white cursor-pointer"
          >
            Kthehu te apartamentet
          </button>
        </div>
      </main>
    );
  }

  const { stair, unit } = apartment;
  const images = unit.gallery?.length ? unit.gallery : [unit.image];

  const stats = [
    { label: "Sipërfaqe totale", value: `${unit.area} m²`, icon: Ruler },
    { label: "Sipërfaqe neto", value: `${unit.netArea} m²`, icon: Ruler },
    { label: "Dhoma gjumi", value: unit.bedrooms, icon: BedDouble },
    { label: "Tualete", value: unit.bathrooms, icon: Bath },
    { label: "Kati", value: unit.floor, icon: Layers3 },
    { label: "Orientimi", value: unit.orientation, icon: Compass },
  ];

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      <ApartmentHero stair={stair} unit={unit} />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_390px]">
          <div className="space-y-8">
            <AparmentImages
              activeImage={activeImage}
              handleChangeImage={handleChangeImage}
              images={images}
              unit={unit}
            />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="rounded-[1.8rem] border border-black/10 bg-white/70 p-5 shadow-[0_18px_60px_rgba(55,38,15,0.07)]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#17130d] text-[#d8b56d]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-sm text-[#62594d]">{item.label}</p>
                    <h3 className="mt-1 text-2xl font-semibold">
                      {item.value}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            <section className="grid gap-8 lg:grid-cols-2">
              {/* <div className="rounded-[2.4rem] border border-black/10 bg-white/75 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.08)]">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
                  Ambientet
                </p>

                <div className="mt-6 space-y-4">
                  {unit.rooms.map((room) => (
                    <div
                      key={room.name}
                      className="flex items-center justify-between border-b border-black/10 pb-4"
                    >
                      <span className="text-[#62594d]">{room.name}</span>
                      <strong>{room.area} m²</strong>
                    </div>
                  ))}
                </div>
              </div>  */}
              <div className="rounded-[2.4rem] border border-black/10 bg-white/75 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.08)]">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
                  Përshkrimi
                </p>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Jetim modern, funksional dhe elegant.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#62594d]">
                  {unit.description}
                </p>
              </div>

              <div className="rounded-[2.4rem] border border-black/10 bg-white/75 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.08)]">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
                  Karakteristikat
                </p>

                <div className="mt-6 grid gap-3">
                  {unit.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-[#17130d] text-[#d8b56d]">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-[#62594d]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {unit.floorPlan && (
              <section className="rounded-[2.4rem] border border-black/10 bg-white/75 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.08)]">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
                      Planimetria
                    </p>
                    <h2 className="text-4xl font-semibold tracking-tight">
                      Organizimi i hapësirës
                    </h2>
                  </div>

                  <Maximize2 className="h-6 w-6 text-[#9a7330]" />
                </div>

                <div className="overflow-hidden rounded-4xl bg-[#f4efe6]">
                  <img
                    src={unit.floorPlan}
                    alt={`Planimetria ${unit.name}`}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </section>
            )}
          </div>

          <ApartmentSidebar stair={stair} unit={unit} />
        </div>
      </section>
    </main>
  );
};
