// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight, Car, Check, Map } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const parkingSpaces = Array.from({ length: 31 }, (_, index) => {
//   const number = index + 1;
//   const code = `P-${String(number).padStart(2, "0")}`;

//   return {
//     id: number,
//     code,
//     status: "Në shitje",
//     type: "Vend parkimi standard",
//     level: "-1",
//     parkingArea: 12.5,
//     sharedArea: 8.8,
//     totalArea: 21.3,
//     image: `/images/parking/${code.toLowerCase()}.jpg`,
//   };
// });

// export const Parking = () => {
//   const navigate = useNavigate();

//   return (
//     <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
//       <section className="relative overflow-hidden px-6 pb-14 pt-36">
//         <div className="absolute -right-40 top-20 h-120 w-120 rounded-full bg-[#d8b56d]/30 blur-[130px]" />
//         <div className="absolute -left-40 bottom-0 h-105 w-105 rounded-full bg-[#17130d]/10 blur-[120px]" />

//         <div className="relative mx-auto max-w-7xl">
//           <button
//             onClick={() => navigate("/apartments")}
//             className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#62594d] transition hover:bg-white hover:text-[#17130d]"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Kthehu te apartamentet
//           </button>

//           <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
//             <div>
//               <motion.p
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]"
//               >
//                 Parkimet
//               </motion.p>

//               <motion.h1
//                 initial={{ opacity: 0, y: 26 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.05 }}
//                 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
//               >
//                 Zgjidh vendparkimin ideal për apartamentin tuaj.
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 26 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.12 }}
//                 className="mt-6 max-w-2xl text-lg leading-8 text-[#62594d]"
//               >
//                 Rezidenca ofron 31 njësi parkimi. Secila njësi ka 12.5 m²
//                 sipërfaqe parkimi dhe 8.8 m² sipërfaqe të përbashkët.
//               </motion.p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 26 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.16 }}
//               className="rounded-4xl bg-[#17130d] p-6 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)]"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-white/50">Totali</p>
//                   <h2 className="text-5xl font-semibold text-[#d8b56d]">31</h2>
//                   <p className="mt-1 text-white/55">vendparkime</p>
//                 </div>

//                 <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-[#d8b56d]">
//                   <Car className="h-8 w-8" />
//                 </span>
//               </div>

//               <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
//                 <div className="rounded-2xl bg-white/8 p-4">
//                   <p className="text-sm text-white/45">Parkim</p>
//                   <strong>12.5 m²</strong>
//                 </div>

//                 <div className="rounded-2xl bg-white/8 p-4">
//                   <p className="text-sm text-white/45">E përbashkët</p>
//                   <strong>8.8 m²</strong>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="px-6 pb-28">
//         <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">
//           <div className="space-y-8">
//             <section className="overflow-hidden rounded-[2.6rem] border border-black/10 bg-white/75 p-5 shadow-[0_30px_110px_rgba(55,38,15,0.12)]">
//               <div className="relative min-h-107.5 overflow-hidden rounded-4xl bg-[#17130d]">
//                 <img
//                   src="/images/parking/parking-plan.jpg"
//                   alt="Planimetria e parkimeve"
//                   className="absolute inset-0 h-full w-full object-cover opacity-90"
//                 />

//                 <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

//                 <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 text-white md:flex-row md:items-end">
//                   <div>
//                     <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
//                       Planimetria
//                     </p>

//                     <h2 className="text-4xl font-semibold tracking-tight">
//                       Organizimi i parkimeve
//                     </h2>

//                     <p className="mt-3 max-w-2xl text-white/65">
//                       Shikoni planin e përgjithshëm të parkimeve dhe më poshtë
//                       çdo njësi individuale.
//                     </p>
//                   </div>

//                   <span className="flex w-fit items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-xl">
//                     <Map className="h-5 w-5 text-[#d8b56d]" />
//                     Niveli -1
//                   </span>
//                 </div>
//               </div>
//             </section>

//             <section>
//               <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//                 <div>
//                   <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#9a7330]">
//                     Njësitë e parkimit
//                   </p>

//                   <h2 className="text-4xl font-semibold tracking-tight">
//                     31 vendparkime
//                   </h2>
//                 </div>
//               </div>

//               <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
//                 {parkingSpaces.map((parking, index) => (
//                   <motion.article
//                     key={parking.id}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.015 }}
//                     whileHover={{ y: -6 }}
//                     className="group overflow-hidden rounded-4xl border border-black/10 bg-white/75 shadow-[0_16px_50px_rgba(55,38,15,0.07)] transition hover:bg-white"
//                   >
//                     <div className="relative h-56 overflow-hidden">
//                       <img
//                         src={parking.image}
//                         alt={parking.code}
//                         className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                       />

//                       <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

//                       <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#17130d]">
//                         {parking.type}
//                       </span>

//                       <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
//                         <div>
//                           <p className="text-xs uppercase tracking-[0.28em] text-[#d8b56d]">
//                             Vend parkimi
//                           </p>

//                           <h3 className="mt-2 text-3xl font-semibold">
//                             {parking.code}
//                           </h3>
//                         </div>

//                         <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-xl">
//                           <Car className="h-6 w-6 text-[#d8b56d]" />
//                         </span>
//                       </div>
//                     </div>

//                     <div className="p-5">
//                       <div className="grid grid-cols-2 gap-3">
//                         <div className="rounded-2xl bg-[#f4efe6] p-4">
//                           <p className="text-xs text-[#62594d]">Sip. parkimi</p>
//                           <strong>{parking.parkingArea} m²</strong>
//                         </div>

//                         <div className="rounded-2xl bg-[#f4efe6] p-4">
//                           <p className="text-xs text-[#62594d]">E përbashkët</p>
//                           <strong>{parking.sharedArea} m²</strong>
//                         </div>
//                       </div>

//                       <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-5">
//                         <span className="rounded-full bg-[#e8dac0] px-4 py-2 text-sm font-semibold text-[#17130d]">
//                           {parking.status}
//                         </span>

//                         <span className="text-sm text-[#62594d]">
//                           Total {parking.totalArea} m²
//                         </span>
//                       </div>
//                     </div>
//                   </motion.article>
//                 ))}
//               </div>
//             </section>
//           </div>

//           <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
//             <div className="rounded-[2.2rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.1)]">
//               <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
//                 Përmbledhje
//               </p>

//               <div className="space-y-4">
//                 {[
//                   ["Numri i parkimeve", "31"],
//                   ["Sipërfaqe parkimi", "12.5 m²"],
//                   ["Sipërfaqe e përbashkët", "8.8 m²"],
//                   ["Sipërfaqe totale", "21.3 m²"],
//                   ["Niveli", "-1"],
//                 ].map(([label, value]) => (
//                   <div
//                     key={label}
//                     className="flex items-center justify-between border-b border-black/10 pb-3"
//                   >
//                     <span className="text-[#62594d]">{label}</span>
//                     <strong>{value}</strong>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="rounded-[2.2rem] bg-[#17130d] p-6 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)]">
//               <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
//                 Rezervim
//               </p>

//               <h3 className="mt-3 text-3xl font-semibold tracking-tight">
//                 Dëshironi të rezervoni parkim?
//               </h3>

//               <p className="mt-4 leading-7 text-white/60">
//                 Parkimet janë opsionale dhe mund të diskutohen bashkë me
//                 apartamentin e zgjedhur.
//               </p>

//               <button
//                 onClick={() => navigate("/contact")}
//                 className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d8b56d] px-6 py-4 font-semibold text-[#17130d] transition hover:bg-white"
//               >
//                 Kontakto për parkim
//                 <ArrowRight className="h-4 w-4" />
//               </button>
//             </div>

//             <div className="rounded-[2.2rem] border border-black/10 bg-white/75 p-6">
//               <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
//                 Përfshihet
//               </p>

//               {[
//                 "Vend i dedikuar për automjet",
//                 "Akses i lehtë nga rezidenca",
//                 "Sipërfaqe standarde 12.5 m²",
//                 "Organizim i qartë në planimetri",
//               ].map((item) => (
//                 <div key={item} className="mb-3 flex items-center gap-3">
//                   <span className="grid h-7 w-7 place-items-center rounded-full bg-[#17130d] text-[#d8b56d]">
//                     <Check className="h-4 w-4" />
//                   </span>

//                   <span className="text-[#62594d]">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </aside>
//         </div>
//       </section>
//     </main>
//   );
// };

import { ArrowLeft, ArrowRight, Car, Check, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Animate } from "../../components/Animate";

const parkingSpaces = Array.from({ length: 31 }, (_, index) => {
  const number = index + 1;
  const code = `P-${String(number).padStart(2, "0")}`;

  return {
    id: number,
    code,
    status: "Në shitje",
    type: "Vend parkimi standard",
    level: "-1",
    parkingArea: 12.5,
    sharedArea: 8.8,
    totalArea: 21.3,
    // image: `/images/parking/${code.toLowerCase()}.jpg`,
    image: `/images/parkimi.jpg`,
  };
});

export const Parking = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#17130d]">
      <section className="relative overflow-hidden px-6 pb-14 pt-36">
        <div className="absolute -right-40 top-20 h-120 w-120 rounded-full bg-[#d8b56d]/30 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-105 w-105 rounded-full bg-[#17130d]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <button
            onClick={() => navigate("/apartments")}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-[#62594d] transition hover:bg-white hover:text-[#17130d]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kthehu te apartamentet
          </button>

          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <Animate
                as="p"
                preset="fadeIn"
                skipAnimation
                className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9a7330]"
              >
                Parkimet
              </Animate>

              <Animate
                as="h1"
                preset="fadeUp"
                delay={0.05}
                skipAnimation
                className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl"
              >
                Zgjidh vendparkimin ideal për apartamentin tuaj.
              </Animate>

              <Animate
                as="p"
                preset="fadeUp"
                delay={0.12}
                skipAnimation
                className="mt-6 max-w-2xl text-lg leading-8 text-[#62594d]"
              >
                Rezidenca ofron 31 njësi parkimi. Secila njësi ka 12.5 m²
                sipërfaqe parkimi dhe 8.8 m² sipërfaqe të përbashkët.
              </Animate>
            </div>

            <Animate
              preset="fadeUp"
              delay={0.16}
              skipAnimation
              className="rounded-4xl bg-[#17130d] p-6 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">Totali</p>
                  <h2 className="text-5xl font-semibold text-[#d8b56d]">31</h2>
                  <p className="mt-1 text-white/55">vendparkime</p>
                </div>

                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-[#d8b56d]">
                  <Car className="h-8 w-8" />
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-sm text-white/45">Parkim</p>
                  <strong>12.5 m²</strong>
                </div>

                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-sm text-white/45">E përbashkët</p>
                  <strong>8.8 m²</strong>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <Animate
              preset="scaleUp"
              className="overflow-hidden rounded-[2.6rem] border border-black/10 bg-white/75 p-5 shadow-[0_30px_110px_rgba(55,38,15,0.12)]"
            >
              <div className="relative min-h-107.5 overflow-hidden rounded-4xl bg-[#17130d]">
                <img
                  src="/images/parkimi.jpg"
                  alt="Planimetria e parkimeve"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 text-white md:flex-row md:items-end">
                  <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                      Planimetria
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight">
                      Organizimi i parkimeve
                    </h2>

                    <p className="mt-3 max-w-2xl text-white/65">
                      Shikoni planin e përgjithshëm të parkimeve dhe më poshtë
                      çdo njësi individuale.
                    </p>
                  </div>

                  <span className="flex w-fit items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-xl">
                    <Map className="h-5 w-5 text-[#d8b56d]" />
                    Niveli -1
                  </span>
                </div>
              </div>
            </Animate>

            <section>
              <Animate
                preset="fadeUp"
                className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end"
              >
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[#9a7330]">
                    Njësitë e parkimit
                  </p>

                  <h2 className="text-4xl font-semibold tracking-tight">
                    31 vendparkime
                  </h2>
                </div>
              </Animate>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {parkingSpaces.map((parking, index) => (
                  <Animate
                    key={parking.id}
                    preset="fadeUp"
                    delay={index * 0.015}
                    className="group overflow-hidden rounded-4xl border border-black/10 bg-white/75 shadow-[0_16px_50px_rgba(55,38,15,0.07)] transition hover:-translate-y-1.5 hover:bg-white"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={parking.image}
                        alt={parking.code}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#17130d]">
                        {parking.type}
                      </span>

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-[#d8b56d]">
                            Vend parkimi
                          </p>

                          <h3 className="mt-2 text-3xl font-semibold">
                            {parking.code}
                          </h3>
                        </div>

                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 backdrop-blur-xl">
                          <Car className="h-6 w-6 text-[#d8b56d]" />
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-[#f4efe6] p-4">
                          <p className="text-xs text-[#62594d]">Sip. parkimi</p>
                          <strong>{parking.parkingArea} m²</strong>
                        </div>

                        <div className="rounded-2xl bg-[#f4efe6] p-4">
                          <p className="text-xs text-[#62594d]">E përbashkët</p>
                          <strong>{parking.sharedArea} m²</strong>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-5">
                        <span className="rounded-full bg-[#e8dac0] px-4 py-2 text-sm font-semibold text-[#17130d]">
                          {parking.status}
                        </span>

                        <span className="text-sm text-[#62594d]">
                          Total {parking.totalArea} m²
                        </span>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Animate
              preset="slideRight"
              className="rounded-[2.2rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.1)]"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
                Përmbledhje
              </p>

              <div className="space-y-4">
                {[
                  ["Numri i parkimeve", "31"],
                  ["Sipërfaqe parkimi", "12.5 m²"],
                  ["Sipërfaqe e përbashkët", "8.8 m²"],
                  ["Sipërfaqe totale", "21.3 m²"],
                  ["Niveli", "-1"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-black/10 pb-3"
                  >
                    <span className="text-[#62594d]">{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </Animate>

            <Animate
              preset="slideRight"
              delay={0.08}
              className="rounded-[2.2rem] bg-[#17130d] p-6 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)]"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
                Rezervim
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Dëshironi të rezervoni parkim?
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Parkimet janë opsionale dhe mund të diskutohen bashkë me
                apartamentin e zgjedhur.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d8b56d] px-6 py-4 font-semibold text-[#17130d] transition hover:bg-white"
              >
                Kontakto për parkim
                <ArrowRight className="h-4 w-4" />
              </button>
            </Animate>

            <Animate
              preset="slideRight"
              delay={0.16}
              className="rounded-[2.2rem] border border-black/10 bg-white/75 p-6"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
                Përfshihet
              </p>

              {[
                "Vend i dedikuar për automjet",
                "Akses i lehtë nga rezidenca",
                "Sipërfaqe standarde 12.5 m²",
                "Organizim i qartë në planimetri",
              ].map((item) => (
                <div key={item} className="mb-3 flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#17130d] text-[#d8b56d]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[#62594d]">{item}</span>
                </div>
              ))}
            </Animate>
          </aside>
        </div>
      </section>
    </main>
  );
};
