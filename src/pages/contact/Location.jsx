import { motion } from "framer-motion";
import { Navigation } from "lucide-react";

export const Location = ({ t }) => {
  const mapUrl = "https://maps.app.goo.gl/AifTTwsTKo78QDoe7";

  return (
    <section className="mx-auto mt-8 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid overflow-hidden rounded-[2.75rem] border border-black/10 bg-white/75 shadow-[0_30px_100px_rgba(55,38,15,0.1)] backdrop-blur-2xl lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="p-8 md:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
            {t("location.title")}
          </p>

          <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
            {t("location.location")}
          </h2>

          <p className="mt-5 leading-7 text-[#62594d]">
            {t("location.description")}
          </p>

          <span
            href={mapUrl}
            onClick={() =>
              window.open("https://maps.app.goo.gl/AifTTwsTKo78QDoe7")
            }
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-[#f1e6d4] px-6 py-3 font-semibold text-[#17130d] transition hover:bg-[#17130d] hover:text-white cursor-pointer"
          >
            {t("location.openOnMap")}
            <Navigation className="h-5 w-5" />
          </span>
        </div>

        <div className="relative min-h-90 bg-[#d8b56d]/20 lg:min-h-full">
          <iframe
            title="Zoi Villa Residence Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7845449201445!2d19.8560522!3d41.3135505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350375878ab1ed9%3A0xa99a2dc04568fc38!2sZOI%20VILLA!5e0!3m2!1sen!2s!4v1778850025713!5m2!1sen!2s"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
};
