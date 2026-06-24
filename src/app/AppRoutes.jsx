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
