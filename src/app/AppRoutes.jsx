// import { Suspense, lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Layout } from "../layout/Layout";
// import { HomePage } from "../pages/home/Home";

// // const HomePage = lazy(() =>
// //   import("../pages/home").then((module) => ({ default: module.HomePage })),
// // );
// const Residence = lazy(() =>
//   import("../pages/residence").then((module) => ({
//     default: module.Residence,
//   })),
// );
// const Apartments = lazy(() =>
//   import("../pages/apartments").then((module) => ({
//     default: module.Apartments,
//   })),
// );
// const ViewApartment = lazy(() =>
//   import("../pages/viewApartment").then((module) => ({
//     default: module.ViewApartment,
//   })),
// );
// const Parking = lazy(() =>
//   import("../pages/parking").then((module) => ({ default: module.Parking })),
// );
// const Villas = lazy(() =>
//   import("../pages/villas").then((module) => ({ default: module.Villas })),
// );
// const ViewVilla = lazy(() =>
//   import("../pages/viewVilla").then((module) => ({
//     default: module.ViewVilla,
//   })),
// );
// const Contact = lazy(() =>
//   import("../pages/contact").then((module) => ({ default: module.Contact })),
// );

// export const AppRoutes = () => {
//   return (
//     <Suspense fallback={null}>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/residence" element={<Residence />} />
//           <Route path="/apartments" element={<Apartments />} />
//           <Route
//             path="/apartments/:stairSlug/:unitSlug"
//             element={<ViewApartment />}
//           />
//           <Route path="/parking" element={<Parking />} />
//           <Route path="/villas" element={<Villas />} />
//           <Route path="/villas/:id" element={<ViewVilla />} />
//           <Route path="/contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// };

import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";

import { HomePage } from "../pages/home";
import { Residence } from "../pages/residence";
import { Apartments } from "../pages/apartments";
import { ViewApartment } from "../pages/viewApartment";
import { Parking } from "../pages/parking";
import { Villas } from "../pages/villas";
import { ViewVilla } from "../pages/viewVilla";
import { Contact } from "../pages/contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/residence" element={<Residence />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route
          path="/apartments/:stairSlug/:unitSlug"
          element={<ViewApartment />}
        />
        <Route path="/parking" element={<Parking />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/villas/:id" element={<ViewVilla />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
