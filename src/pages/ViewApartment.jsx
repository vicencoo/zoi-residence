import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Building2,
  Check,
  Compass,
  Home,
  Layers3,
  Mail,
  Maximize2,
  Phone,
  Ruler,
  //   Sofa,
  SquareParking,
} from "lucide-react";
import { apartmentStairs } from "../data/apartments";

export const ViewApartment = () => {
  const { stairSlug, unitSlug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const apartment = useMemo(() => {
    const stair = apartmentStairs.find((item) => item.slug === stairSlug);
    const unit = stair?.units.find((item) => item.slug === unitSlug);

    if (!stair || !unit) return null;

    return {
      stair,
      unit,
    };
  }, [stairSlug, unitSlug]);

  if (!apartment) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f4efe6] px-6 text-[#17130d]">
        <div className="max-w-xl rounded-4xl bg-white p-10 text-center shadow-xl">
          <h1 className="text-3xl font-semibold">Apartamenti nuk u gjet.</h1>
          <button
            onClick={() => navigate("/apartments")}
            className="mt-6 rounded-full bg-[#17130d] px-6 py-3 text-white"
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
    { label: "Dhoma gjumi", value: unit.bedrooms, icon: BedDouble },
    { label: "Tualete", value: unit.bathrooms, icon: Bath },
    { label: "Kati", value: unit.floor, icon: Layers3 },
    { label: "Orientimi", value: unit.orientation, icon: Compass },
    { label: "Parkim", value: unit.parking, icon: SquareParking },
  ];

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="absolute -right-44 top-20 h-120 w-120 rounded-full bg-[#d8b56d]/25 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-black/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <button
            onClick={() => navigate("/apartments")}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#62594d] backdrop-blur-xl transition hover:bg-white hover:text-[#17130d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kthehu te apartamentet
          </button>

          <div className="grid gap-10 lg:grid-cols-[1fr_430px] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
                {stair.name} / {unit.type}
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                {unit.name}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#62594d]">
                {unit.shortDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="rounded-4xl border border-black/10 bg-[#17130d] p-6 text-white shadow-[0_30px_100px_rgba(23,19,13,0.22)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-white/55">Statusi</p>
                  <h2 className="mt-1 text-2xl font-semibold text-[#d8b56d]">
                    {unit.status}
                  </h2>
                </div>

                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-[#d8b56d]">
                  <Home className="h-6 w-6" />
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-sm text-white/45">Çmimi</p>
                  <p className="mt-1 text-xl font-semibold">{unit.price}</p>
                </div>
                <div>
                  <p className="text-sm text-white/45">Çmimi / m²</p>
                  <p className="mt-1 text-xl font-semibold">
                    {unit.pricePerM2}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_390px]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-[2.8rem] border border-black/10 bg-white/70 p-4 shadow-[0_30px_110px_rgba(55,38,15,0.12)] backdrop-blur-xl"
            >
              <div className="relative h-130 overflow-hidden rounded-[2.2rem]">
                <img
                  src={images[activeImage]}
                  alt={unit.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 text-white md:flex-row md:items-end">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                      Galeria
                    </p>
                    <h2 className="mt-2 text-4xl font-semibold tracking-tight">
                      Pamje e apartamentit
                    </h2>
                  </div>

                  <div className="rounded-full bg-white/15 px-5 py-3 text-sm backdrop-blur-xl">
                    {activeImage + 1} / {images.length}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setActiveImage(index)}
                    className={`h-24 overflow-hidden rounded-2xl border transition ${
                      activeImage === index
                        ? "border-[#9a7330]"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${unit.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

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

            <section className="rounded-[2.4rem] border border-black/10 bg-white/75 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.08)]">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
                Përshkrimi
              </p>
              <h2 className="text-4xl font-semibold tracking-tight">
                Jetim modern, funksional dhe elegant.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#62594d]">
                {unit.description}
              </p>
            </section>

            <section className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2.4rem] border border-black/10 bg-white/75 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.08)]">
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

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2.4rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.1)] backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <span className="grid h-13 w-13 place-items-center rounded-2xl bg-[#17130d] text-[#d8b56d]">
                  <Building2 className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-[#62594d]">Vendndodhja</p>
                  <h3 className="text-xl font-semibold">{stair.name}</h3>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#f4efe6] p-4">
                  <p className="text-sm text-[#62594d]">Tipologjia</p>
                  <strong>{unit.type}</strong>
                </div>

                <div className="rounded-2xl bg-[#f4efe6] p-4">
                  <p className="text-sm text-[#62594d]">Kuzhina</p>
                  <strong>{unit.kitchen}</strong>
                </div>

                <div className="rounded-2xl bg-[#f4efe6] p-4">
                  <p className="text-sm text-[#62594d]">Ballkone</p>
                  <strong>{unit.balconies}</strong>
                </div>

                <div className="rounded-2xl bg-[#f4efe6] p-4">
                  <p className="text-sm text-[#62594d]">Sallon</p>
                  <strong>{unit.livingRooms}</strong>
                </div>
              </div>
            </div>

            <div className="rounded-[2.4rem] bg-[#17130d] p-6 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                Kontakt
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Interesohuni për këtë apartament
              </h3>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${unit.contact.phone}`}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 transition hover:bg-white/15"
                >
                  <Phone className="h-5 w-5 text-[#d8b56d]" />
                  {unit.contact.phone}
                </a>

                <a
                  href={`mailto:${unit.contact.email}`}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 transition hover:bg-white/15"
                >
                  <Mail className="h-5 w-5 text-[#d8b56d]" />
                  {unit.contact.email}
                </a>
              </div>

              <a
                href={`https://wa.me/${unit.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block rounded-full bg-[#d8b56d] px-6 py-4 text-center font-semibold text-[#17130d] transition hover:bg-white"
              >
                Kontakto në WhatsApp
              </a>
            </div>

            <div className="rounded-[2.4rem] border border-black/10 bg-white/75 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.08)]">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
                Përreth
              </p>

              <div className="space-y-3">
                {unit.nearby.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#9a7330]" />
                    <span className="text-[#62594d]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
