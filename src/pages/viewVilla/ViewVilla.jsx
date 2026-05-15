import { Link } from "react-router-dom";
import { ArrowLeft, Check, Phone, Trees, Waves } from "lucide-react";
import { Animate } from "../../components/Animate";
import { VillaImages } from "./VillaImages";
import { useViewVilla } from "./useViewVilla";
import { useTranslation } from "react-i18next";
import { VIEW_VILLA_DETAILS } from "../../constants/viewVillaDetails";

export const ViewVilla = () => {
  const { activeImage, handleChangeImage, villa } = useViewVilla();
  const { t } = useTranslation("viewVilla");

  if (!villa) {
    return (
      <main className="min-h-screen bg-[#f4efe6] px-6 py-36 text-[#17130d] ">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-black/10 bg-white/75 p-10 text-center">
          <h1 className="text-5xl font-semibold"> {t("noVillaFound")}</h1>
          <Link
            to="/villas"
            className="mt-8 inline-flex rmin-h-screenounded-full bg-[#17130d] px-7 py-4 font-semibold text-[#d8b56d]"
          >
            {t("backToVillas")}
          </Link>
        </div>
      </main>
    );
  }

  const details = VIEW_VILLA_DETAILS(t, villa);

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d] overflow-x-clip">
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="absolute -right-40 top-20 h-130 w-130 rounded-full bg-[#d8b56d]/30 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-115 w-115 rounded-full bg-[#17130d]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/villas"
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#62594d] transition hover:bg-white hover:text-[#17130d]"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToVillas")}
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Animate preset="fadeUp">
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
              className="rounded-[2.5rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.1)]"
            >
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#17130d] px-5 py-3 text-sm font-semibold text-[#d8b56d]">
                  {villa.status}
                </span>
                {villa.hasPool && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#9a7330]/30 bg-[#e8dac0] px-5 py-3 text-sm text-[#9a7330]">
                    <Waves className="h-4 w-4" />
                    {t("privatePool")}
                  </span>
                )}
                {villa.hasGarden && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f4efe6] px-5 py-3 text-sm text-[#62594d]">
                    <Trees className="h-4 w-4 text-[#9a7330]" />
                    {t("privateGardern")}
                  </span>
                )}
              </div>

              <div className="mt-7 border-t border-black/10 pt-7">
                <p className="text-sm text-[#62594d]">{t("price")}</p>
                <h2 className="mt-2 text-3xl font-semibold">
                  {villa.price
                    ? `${villa.price.toLocaleString()} ${villa.currency}`
                    : `${t("askForPrice")}`}
                </h2>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <VillaImages
        activeImage={activeImage}
        handleChangeImage={handleChangeImage}
        villa={villa}
        t={t}
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Animate
            preset="slideLeft"
            className="rounded-[2.7rem] border border-black/10 bg-white/80 p-7 shadow-[0_24px_80px_rgba(55,38,15,0.1)] md:p-9"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
              {t("features.briefing")}
            </p>
            <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              {t("features.label")}
            </h2>

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
              {t("features.featuresLabel")}
            </p>
            <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              {t("features.featuresText")}
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

            <a
              href="tel:+355682025455"
              className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d8b56d] px-7 py-4 font-semibold text-[#17130d] transition hover:bg-white"
            >
              {t("features.featuresButton")}
              <Phone className="h-5 w-5" />
            </a>
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
                {t("layout.label")}
              </p>
              <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
                {t("layout.text")}
              </h2>
            </div>
            <span className="w-fit rounded-full bg-[#17130d] px-5 py-3 text-sm font-semibold text-[#d8b56d]">
              {villa.floors} {t("layout.floors")}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-start">
            {villa.floorPlans?.map((plan, index) => (
              <div
                key={plan}
                className="overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#f4efe6]"
              >
                <div className="relative">
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
                {t("contact.label")}
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tighter md:text-6xl">
                {t("contact.title", { villaname: villa.name })}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                {t("contact.text")}
              </p>
            </div>
            <a
              href="tel:+355682025455"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d8b56d] px-8 py-5 font-semibold text-[#17130d] transition hover:bg-white"
            >
              {t("contact.contactButton")}
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </Animate>
      </section>
    </main>
  );
};
