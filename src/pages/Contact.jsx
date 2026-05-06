import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock, ShieldCheck } from "lucide-react";

export const Contact = () => {
  return (
    <main className="min-h-screen bg-[#080806] px-6 py-32 text-white">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2.5rem] border border-white/10 bg-white/5.5 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-12"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-200">
            Kontakt
          </p>

          <h1 className="text-5xl font-semibold tracking-tighter md:text-7xl">
            Rezervoni një vizitë private.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/58">
            Na kontaktoni për të marrë informacion mbi apartamentet, vilat,
            çmimet, disponueshmërinë dhe mundësitë e rezervimit në Zoi Villa
            Residence.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              {
                icon: Phone,
                title: "Telefon",
                value: "+355 69 000 0000",
                href: "tel:+355690000000",
              },
              {
                icon: Mail,
                title: "Email",
                value: "sales@zoivilla.al",
                href: "mailto:sales@zoivilla.al",
              },
              {
                icon: MapPin,
                title: "Vendndodhja",
                value: "Tiranë, Shqipëri",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-black/25 p-5 transition hover:border-amber-200/40 hover:bg-white/[0.07]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-200/10 text-amber-200 transition group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/42">{item.title}</p>
                  <p className="font-medium text-white">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5.5 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-300/15 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-[90px]" />

          <div className="relative">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-200">
              Formulari
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Kërkoni informacion
            </h2>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200/50"
                  placeholder="Emri"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200/50"
                  placeholder="Mbiemri"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200/50"
                  placeholder="Telefoni"
                />
                <input
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200/50"
                  placeholder="Email"
                />
              </div>

              <select className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-amber-200/50">
                <option>Jam i/e interesuar për...</option>
                <option>Apartamente</option>
                <option>Vila</option>
                <option>Vizitë në rezidencë</option>
              </select>

              <textarea
                rows="5"
                className="resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-amber-200/50"
                placeholder="Mesazhi juaj"
              />

              <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-300 px-7 py-4 font-semibold text-black transition hover:bg-white">
                Dërgo kërkesën
                <Send className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <Clock className="mb-3 h-5 w-5 text-amber-200" />
                <p className="font-semibold">Përgjigje e shpejtë</p>
                <p className="mt-2 text-sm leading-6 text-white/48">
                  Ekipi i shitjeve ju kontakton për detajet dhe orarin e
                  vizitës.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <ShieldCheck className="mb-3 h-5 w-5 text-amber-200" />
                <p className="font-semibold">Konsultim privat</p>
                <p className="mt-2 text-sm leading-6 text-white/48">
                  Informacion i dedikuar për pronën që ju intereson.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};
