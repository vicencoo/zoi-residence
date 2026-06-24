import { MessageCircle, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ContactOptions } from "./ContactOptions";
import { Location } from "./Location";
import { Animate } from "../../components/Animate";

export const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4efe6] px-6 py-28 text-[#17130d] md:py-32">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <ContactOptions t={t} />

        <Animate
          as="aside"
          delay={120}
          duration={700}
          className="grid gap-8"
        >
          <div className="relative overflow-hidden rounded-[2.75rem] border border-black/10 bg-[#17130d] p-8 text-white shadow-[0_30px_100px_rgba(55,38,15,0.18)] md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d8b56d]/25 blur-[80px]" />

            <div className="relative">
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d8b56d]">
                {t("privateVisit")}
              </p>
              <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
                {t("discoverText")}
              </h2>
              <p className="mt-5 leading-7 text-white/70">{t("consultText")}</p>

              <a
                href="https://wa.me/355682025455"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#d8b56d] px-7 py-4 font-semibold text-[#17130d] transition hover:bg-white"
              >
                {t("reserveWhatsappText")}
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[2.75rem] border border-black/10 bg-white/75 p-8 shadow-[0_30px_100px_rgba(55,38,15,0.1)] backdrop-blur-2xl md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#9a7330]">
                  {t("scheduleTitle")}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  {t("scheduleText")}
                </h3>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#d8b56d]/20 text-[#9a7330]">
                <Clock className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-7 grid gap-3 text-[#62594d]">
              <div className="flex items-center justify-between rounded-2xl bg-[#f1e6d4] px-5 py-4">
                <span>{t("weekDays")}</span>
                <strong className="text-[#17130d]">{t("weekDaysTime")}</strong>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-[#f1e6d4] px-5 py-4">
                <span>{t("weekEndDay")}</span>
                <strong className="text-[#17130d]">{t("weekEndTime")}</strong>
              </div>
            </div>
          </div>
        </Animate>
      </section>

      <Location t={t} />
    </main>
  );
};
