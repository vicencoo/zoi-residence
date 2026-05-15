import { Animate } from "../../components/Animate";

export const VillaImages = ({ activeImage, villa, handleChangeImage, t }) => {
  return (
    <section className="px-6 pb-24">
      {/* <div className="mx-auto max-w-7xl"> */}
      <div className="mx-auto max-w-7xl w-full">
        <Animate
          preset="scaleUp"
          className="relative h-105 overflow-hidden rounded-[3rem] border border-black/10 bg-white/75 shadow-[0_30px_110px_rgba(55,38,15,0.12)] md:h-170 "
        >
          <img
            src={activeImage}
            alt={villa.name}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 rounded-4xl border border-white/10 bg-black/35 p-5 text-white backdrop-blur-xl md:bottom-8 md:left-8 md:right-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
              {t("images.label")}
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              {t("images.illustrativeView", { villaname: villa.name })}
            </h2>
          </div>
        </Animate>
        <div className="mt-5 flex gap-4 overflow-x-auto py-1 px-1 scrollbar-hide">
          {/* <div className="mt-5 flex gap-4 overflow-x-auto pb-3 max-w-full"> */}
          {/* <div className="flex px-1 mt-5 pb-3 w-full lg:grid lg:grid-cols-7 gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory"> */}
          {villa.images?.map((image, index) => {
            const isActive = activeImage === image;

            return (
              <button
                key={image}
                type="button"
                onClick={() => handleChangeImage(image)}
                className={`relative h-24 shrink-0 w-32 overflow-hidden rounded-3xl border transition duration-300 md:h-32 md:w-44 ${
                  isActive
                    ? "border-[#9a7330] ring-4 ring-[#d8b56d]/30"
                    : "border-black/10 opacity-75 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${villa.name} ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

                <div
                  className={`absolute inset-0 transition ${
                    isActive ? "bg-black/5" : "bg-black/25"
                  }`}
                />

                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#17130d]">
                  {t("images.image")} {index + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
