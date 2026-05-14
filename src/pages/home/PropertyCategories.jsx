import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROPERTY_CATEGS } from "../../constants/propertyCategories";

export const PropertyCategories = ({
  active,
  handleChangeActive,
  isMobile,
  t,
}) => {
  const navigate = useNavigate();
  const propertyCategories = PROPERTY_CATEGS(t);
  return (
    <section
      id="kategorite"
      className="relative z-10 mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9a7330]">
          {t("propertyCateg.label")}
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17130d] md:text-6xl">
          {t("propertyCateg.title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#62594d]">
          {t("propertyCateg.description")}
        </p>
      </div>

      <div className="grid gap-7 lg:grid-cols-2">
        {propertyCategories.map((property, index) => (
          <motion.article
            key={property.type}
            onMouseEnter={() => handleChangeActive(index)}
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -14, rotateX: 5, rotateY: index === 0 ? -4 : 4 }}
            className={`group overflow-hidden rounded-[2.2rem] border bg-white/75 shadow-[0_30px_80px_rgba(55,38,15,0.12)] backdrop-blur-xl transition duration-500 transform-3d ${
              active === index ? "border-[#9a7330]/50" : "border-black/10"
            }`}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="h-full w-full object-cover transition duration-700 md:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              <span className="absolute left-6 top-6 rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-[#17130d] backdrop-blur-xl">
                {property.type}
              </span>
            </div>
            <div className="p-7 md:p-8">
              <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#17130d]">
                {property.title}
              </h3>
              <p className="mt-4 leading-8 text-[#62594d]">
                {property.description}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {property.details.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-2xl border border-black/10 bg-[#f1e6d4] px-4 py-3 text-sm text-[#62594d]"
                  >
                    ✓ {detail}
                  </div>
                ))}
              </div>
              <span
                onClick={() => navigate(property.path)}
                className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#17130d] px-6 py-3 font-semibold text-white transition hover:bg-[#d8b56d] hover:text-[#17130d]"
              >
                {property.button}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
