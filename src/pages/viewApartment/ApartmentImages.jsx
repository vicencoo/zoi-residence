import { motion } from "framer-motion";

export const AparmentImages = ({
  images,
  activeImage,
  unit,
  handleChangeImage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-[2.8rem] border border-black/10 bg-white/70 p-4 shadow-[0_30px_110px_rgba(55,38,15,0.12)] backdrop-blur-xl"
    >
      <div className="relative h-130 overflow-hidden rounded-[2.2rem]">
        <img
          src={images[activeImage]}
          alt={unit.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 text-white md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
              Galeria
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Pamje e apartamentit
            </h2>
          </div>

          <div className="rounded-full bg-white/15 px-5 py-3 text-sm backdrop-blur-xl">
            {activeImage + 1} / {images.length}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => handleChangeImage(index)}
            className={`h-24 overflow-hidden rounded-2xl border transition ${
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
    </motion.div>
  );
};
