import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Car,
  Check,
  Compass,
  Layers3,
  Maximize2,
  Phone,
  Trees,
  Waves,
} from "lucide-react";
import { villas } from "../../data/villas";
import { Animate } from "../../components/Animate";

export const ViewVilla = () => {
  const { id } = useParams();

  const villa = useMemo(
    () => villas.find((item) => item.id === id || item.slug === id),
    [id],
  );

  const [activeImage, setActiveImage] = useState(villa?.images?.[0]);

  if (!villa) {
    return (
      <main className="min-h-screen bg-[#f4efe6] px-6 py-36 text-[#17130d]">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-black/10 bg-white/75 p-10 text-center">
          <h1 className="text-5xl font-semibold">Vila nuk u gjet.</h1>
          <Link
            to="/vila"
            className="mt-8 inline-flex rounded-full bg-[#17130d] px-7 py-4 font-semibold text-[#d8b56d]"
          >
            Kthehu te vilat
          </Link>
        </div>
      </main>
    );
  }

  const details = [
    { icon: Maximize2, label: "Sipërfaqe ndërtimi", value: `${villa.area} m²` },
    { icon: Trees, label: "Sipërfaqe trualli", value: `${villa.landArea} m²` },
    { icon: BedDouble, label: "Dhoma gjumi", value: villa.bedrooms },
    { icon: Bath, label: "Tualete", value: villa.bathrooms },
    { icon: Car, label: "Parkime", value: villa.parking },
    { icon: Layers3, label: "Kate", value: villa.floors },
    { icon: Compass, label: "Orientimi", value: villa.orientation },
    { icon: Waves, label: "Pishinë", value: villa.hasPool ? "Po" : "Jo" },
  ];

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="absolute -right-40 top-20 h-130 w-130 rounded-full bg-[#d8b56d]/30 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-115 w-115 rounded-full bg-[#17130d]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/villas"
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#62594d] transition hover:bg-white hover:text-[#17130d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kthehu te vilat
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Animate preset="fadeUp" skipAnimation>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
                {villa.row} / {villa.category}
              </p>
              <h1 className="text-6xl font-semibold leading-[0.9] tracking-tighter md:text-8xl">
                {villa.name}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#62594d]">
                {villa.description}
              </p>
            </Animate>

            <Animate
              preset="fadeUp"
              delay={0.08}
              skipAnimation
              className="rounded-[2.5rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.1)]"
            >
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#17130d] px-5 py-3 text-sm font-semibold text-[#d8b56d]">
                  {villa.status}
                </span>
                {villa.hasPool && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#9a7330]/30 bg-[#e8dac0] px-5 py-3 text-sm text-[#9a7330]">
                    <Waves className="h-4 w-4" />
                    Pishinë private
                  </span>
                )}
                {villa.hasGarden && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f4efe6] px-5 py-3 text-sm text-[#62594d]">
                    <Trees className="h-4 w-4 text-[#9a7330]" />
                    Oborr privat
                  </span>
                )}
              </div>

              <div className="mt-7 border-t border-black/10 pt-7">
                <p className="text-sm text-[#62594d]">Çmimi</p>
                <h2 className="mt-2 text-3xl font-semibold">
                  {villa.price
                    ? `${villa.price.toLocaleString()} ${villa.currency}`
                    : "Me kërkesë"}
                </h2>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_340px]">
          <Animate
            preset="scaleUp"
            skipAnimation
            className="relative h-105 overflow-hidden rounded-[3rem] md:h-160"
          >
            <img
              src={activeImage}
              alt={villa.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 rounded-4xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                Galeria
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Pamje ilustruese e {villa.name}
              </h2>
            </div>
          </Animate>

          <div className="grid gap-4">
            {villa.images?.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImage(image)}
                className={`group relative h-32 overflow-hidden rounded-4xl border text-left transition md:h-auto ${
                  activeImage === image
                    ? "border-[#9a7330]"
                    : "border-black/10 hover:border-[#9a7330]/60"
                }`}
              >
                <img
                  src={image}
                  alt={`${villa.name} ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#17130d]">
                  Foto {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Animate
            preset="slideLeft"
            className="rounded-[2.7rem] border border-black/10 bg-white/80 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.1)] md:p-9"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
              Përmbledhje
            </p>
            <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              Detajet kryesore të vilës
            </h2>
            <p className="mt-5 leading-8 text-[#62594d]">
              Këto janë informacionet bazë që klienti duhet të shohë menjëherë
              përpara se të hapë planimetrinë ose të kërkojë takim privat.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.7rem] border border-black/10 bg-[#f4efe6] p-5"
                >
                  <item.icon className="mb-5 h-6 w-6 text-[#9a7330]" />
                  <p className="text-sm text-[#62594d]">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#17130d]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Animate>

          <Animate
            preset="slideRight"
            className="rounded-[2.7rem] border border-black/10 bg-[#17130d] p-7 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)] md:p-9"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d8b56d]">
              Veçoritë
            </p>
            <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              Çfarë e bën këtë vilë të veçantë?
            </h2>

            <div className="mt-8 grid gap-4">
              {villa.features?.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-3xl bg-white/8 p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d8b56d] text-[#0f120d]">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="font-medium text-white/80">{feature}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d8b56d] px-7 py-4 font-semibold text-[#17130d] transition hover:bg-white"
            >
              Kërko informacion për këtë vilë
              <Phone className="h-5 w-5" />
            </Link>
          </Animate>
        </div>
      </section>

      <section className="px-6 pb-28">
        <Animate
          preset="fadeUp"
          className="mx-auto max-w-7xl rounded-[3rem] border border-black/10 bg-white/80 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.1)] md:p-9"
        >
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
                Planimetritë
              </p>
              <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
                Organizimi sipas kateve
              </h2>
            </div>
            <span className="w-fit rounded-full bg-[#17130d] px-5 py-3 text-sm font-semibold text-[#d8b56d]">
              {villa.floors} kate
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {villa.floorPlans?.map((plan, index) => (
              <div
                key={plan}
                className="overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#f4efe6]"
              >
                <div className="relative h-80">
                  <img
                    src={plan}
                    alt={`Planimetria kati ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-[#17130d]">
                    {index === 0 ? "Kati përdhe" : `Kati ${index}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Animate>
      </section>

      <section className="px-6 pb-32">
        <Animate
          preset="scaleUp"
          className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-[#17130d] p-8 text-white md:p-14"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d8b56d]">
                Vizitë private
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tighter md:text-6xl">
                Dëshironi ta shikoni {villa.name} nga afër?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                Kontaktoni ekipin e shitjeve për çmimin, disponueshmërinë,
                vizitën në rezidencë dhe çdo detaj teknik të vilës.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d8b56d] px-8 py-5 font-semibold text-[#17130d] transition hover:bg-white"
            >
              Kontakto tani
              <Phone className="h-5 w-5" />
            </Link>
          </div>
        </Animate>
      </section>
    </main>
  );
};
