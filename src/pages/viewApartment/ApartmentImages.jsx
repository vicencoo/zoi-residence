import { motion } from "framer-motion";

export const AparmentImages = ({
  images,
  activeImage,
  unit,
  handleChangeImage,
  t,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-full overflow-hidden rounded-4xl border border-black/10 bg-white/70 p-3 shadow-[0_30px_110px_rgba(55,38,15,0.12)] backdrop-blur-xl md:rounded-[2.8rem] md:p-4"
    >
      {/* <div className="relative h-[340px] overflow-hidden rounded-[1.6rem] md:h-[520px] md:rounded-[2.2rem]"> */}
      <div className="relative aspect-4/3 overflow-hidden rounded-[1.6rem] md:aspect-16/10 md:rounded-[2.2rem]">
        <img
          src={images[activeImage]}
          alt={unit.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex flex-col justify-between gap-4 text-white md:bottom-6 md:left-6 md:right-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#d8b56d] md:text-sm md:tracking-[0.3em]">
              {t("apartmentImages.gallery")}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
              {t("apartmentImages.label")}
            </h2>
          </div>

          <div className="w-fit rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur-xl md:px-5 md:py-3">
            {activeImage + 1} / {images.length}
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-full overflow-x-auto overscroll-x-contain pb-2">
        <div className="flex min-w-0 gap-3 md:grid md:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => handleChangeImage(index)}
              className={`h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition md:h-24 md:w-auto ${
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
      </div>
    </motion.div>
  );
};
