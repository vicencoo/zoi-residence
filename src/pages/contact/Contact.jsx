import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock, ShieldCheck } from "lucide-react";

export const Contact = () => {
  return (
    <main className="min-h-screen bg-[#f4efe6] px-6 py-32 text-[#17130d]">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2.5rem] border border-black/10 bg-white/75 p-8 shadow-[0_30px_100px_rgba(55,38,15,0.12)] backdrop-blur-2xl md:p-12"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
            Kontakt
          </p>

          <h1 className="text-5xl font-semibold tracking-tighter text-[#17130d] md:text-7xl">
            Rezervoni një vizitë private.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#62594d]">
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
                className="group flex items-center gap-4 rounded-3xl border border-black/10 bg-[#f1e6d4] p-5 transition hover:border-[#9a7330]/40 hover:bg-white"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#d8b56d]/15 text-[#9a7330] transition group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[#62594d]/70">{item.title}</p>
                  <p className="font-medium text-[#17130d]">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/75 p-8 shadow-[0_30px_100px_rgba(55,38,15,0.12)] backdrop-blur-2xl md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d6b46d]/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#17130d]/8 blur-[90px]" />

          <div className="relative">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
              Formulari
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-5xl">
              Kërkoni informacion
            </h2>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-[#17130d] outline-none placeholder:text-[#62594d]/50 focus:border-[#9a7330]/50 focus:bg-white"
                  placeholder="Emri"
                />
                <input
                  className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-[#17130d] outline-none placeholder:text-[#62594d]/50 focus:border-[#9a7330]/50 focus:bg-white"
                  placeholder="Mbiemri"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-[#17130d] outline-none placeholder:text-[#62594d]/50 focus:border-[#9a7330]/50 focus:bg-white"
                  placeholder="Telefoni"
                />
                <input
                  className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-[#17130d] outline-none placeholder:text-[#62594d]/50 focus:border-[#9a7330]/50 focus:bg-white"
                  placeholder="Email"
                />
              </div>

              <select className="rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-[#17130d] outline-none focus:border-[#9a7330]/50 focus:bg-white">
                <option>Jam i/e interesuar për...</option>
                <option>Apartamente</option>
                <option>Vila</option>
                <option>Vizitë në rezidencë</option>
              </select>

              <textarea
                rows="5"
                className="resize-none rounded-2xl border border-black/10 bg-white/70 px-5 py-4 text-[#17130d] outline-none placeholder:text-[#62594d]/50 focus:border-[#9a7330]/50 focus:bg-white"
                placeholder="Mesazhi juaj"
              />

              <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d8b56d] px-7 py-4 font-semibold text-[#17130d] transition hover:bg-[#17130d] hover:text-white">
                Dërgo kërkesën
                <Send className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-black/10 bg-[#f1e6d4] p-5">
                <Clock className="mb-3 h-5 w-5 text-[#9a7330]" />
                <p className="font-semibold text-[#17130d]">
                  Përgjigje e shpejtë
                </p>
                <p className="mt-2 text-sm leading-6 text-[#62594d]">
                  Ekipi i shitjeve ju kontakton për detajet dhe orarin e
                  vizitës.
                </p>
              </div>

              <div className="rounded-3xl border border-black/10 bg-[#f1e6d4] p-5">
                <ShieldCheck className="mb-3 h-5 w-5 text-[#9a7330]" />
                <p className="font-semibold text-[#17130d]">Konsultim privat</p>
                <p className="mt-2 text-sm leading-6 text-[#62594d]">
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
