import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Check,
  Leaf,
  Lock,
  MoveRight,
  Waves,
} from "lucide-react";

const residenceStats = [
  { value: "100%", label: "Rezidencë banimi" },
  // { value: "0", label: "Shërbime komerciale brenda" },
  { value: "2", label: "Tipologji: apartamente & vila" },
  { value: "Finale", label: "Fazë ndërtimi" },
];

const principles = [
  "Privatësi më e lartë për banorët",
  "Më pak qarkullim i jashtëm",
  "Ambient i qetë për familje",
  "Arkitekturë moderne dhe e pastër",
  "Hapësira të organizuara me kujdes",
];

export const Residence = () => {
  return (
    <main className="min-h-screen bg-[#f3eee4] text-[#15120d]">
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute right-0 top-0 h-105 w-105 rounded-full bg-[#d8b56d]/25 blur-[110px]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-end"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9b7837]">
              Koncepti i rezidencës
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Jo thjesht banesa. Një mënyrë më e qetë jetese.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5f574b]">
              Zoi Villa Residence është menduar si një komunitet privat për
              banim, ku çdo detaj favorizon qetësinë, privatësinë dhe jetesën e
              përditshme familjare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, clipPath: "inset(12% 0 12% 0 round 36px)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 36px)" }}
            transition={{ duration: 0.9 }}
            className="relative min-h-155 overflow-hidden rounded-[2.5rem]"
          >
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80"
              alt="Zoi Villa Residence"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 max-w-sm rounded-4xl bg-white/90 p-6 shadow-2xl backdrop-blur-xl">
              <Building2 className="mb-4 h-6 w-6 text-[#9b7837]" />
              <h2 className="text-2xl font-semibold">
                Rezidencë vetëm për banim
              </h2>
              <p className="mt-3 leading-7 text-[#6a6257]">
                Pa restorante dhe pa shërbime komerciale brenda kompleksit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {residenceStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-4xl border border-[#15120d]/10 bg-white/70 p-6 shadow-[0_20px_70px_rgba(40,30,10,0.08)]"
            >
              <p className="text-4xl font-semibold tracking-[-0.04em]">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#6a6257]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9b7837]">
              Identiteti
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tighter md:text-6xl">
              Një projekt i pastër rezidencial, i ndërtuar rreth privatësisë.
            </h2>
          </div>

          <div className="grid gap-4">
            {principles.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex items-center justify-between rounded-[1.7rem] border border-[#15120d]/10 bg-white/65 p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#15120d] text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="font-medium">{item}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#9b7837]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#15120d] px-6 py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            {
              icon: Lock,
              title: "Privatësi",
              text: "Rezidenca është konceptuar për banorët, jo për qarkullim publik.",
            },
            {
              icon: Leaf,
              title: "Qetësi",
              text: "Mungesa e aktiviteteve komerciale ndihmon në ruajtjen e atmosferës së qetë.",
            },
            {
              icon: Waves,
              title: "Komoditet",
              text: "Apartamente moderne dhe vila, disa me pishinë private.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2.2rem] border border-white/10 bg-white/6 p-8"
            >
              <item.icon className="mb-10 h-8 w-8 text-[#d8b56d]" />
              <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-white/55">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-140 overflow-hidden rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1500&q=80"
              alt="Arkitekturë rezidenciale"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center rounded-[2.5rem] bg-[#e6dccb] p-8 md:p-12">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9b7837]">
              Për banorët
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tighter md:text-6xl">
              Çdo zonë ka një qëllim: jetesë më e mirë.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#62594d]">
              Rrugicat, hapësirat e hapura, privatësia e vilave dhe organizimi i
              apartamenteve krijojnë një ambient të balancuar për banim
              afatgjatë.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#15120d] px-7 py-4 font-semibold text-white transition hover:bg-[#9b7837]"
            >
              Kërko prezantim
              <MoveRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
