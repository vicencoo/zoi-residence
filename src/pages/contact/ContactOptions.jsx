import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CONTACT_OPTIONS } from "../../constants/contactOptions";

export const ContactOptions = ({ t }) => {
  const contactOptions = CONTACT_OPTIONS(t);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[2.75rem] border border-black/10 bg-white/75 p-8 shadow-[0_30px_100px_rgba(55,38,15,0.12)] backdrop-blur-2xl md:p-12"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#d8b56d]/25 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#17130d]/10 blur-[90px]" />

      <div className="relative">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
          {t("contactOptions.title")}
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-[#17130d] md:text-7xl">
          {t("contactOptions.text")}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#62594d]">
          {t("contactOptions.description")}
        </p>

        <div className="mt-10 grid gap-4">
          {contactOptions.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="group grid gap-5 rounded-3xl border border-black/10 bg-[#f1e6d4]/80 p-5 transition hover:-translate-y-1 hover:border-[#9a7330]/40 hover:bg-white hover:shadow-[0_20px_60px_rgba(55,38,15,0.12)] md:grid-cols-[auto_1fr_auto] md:items-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#d8b56d]/20 text-[#9a7330] transition group-hover:scale-110 group-hover:bg-[#d8b56d] group-hover:text-[#17130d]">
                <item.icon className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#62594d]">
                  {item.title}
                </p>
                <p className="mt-1 text-lg font-semibold text-[#17130d]">
                  {item.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#62594d]">
                  {item.text}
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#17130d] transition group-hover:bg-[#17130d] group-hover:text-white">
                {item.cta}
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
