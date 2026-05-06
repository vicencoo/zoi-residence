import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Apartments } from "../pages/Apartments";
import { Villas } from "../pages/Villas";
import { Contact } from "../pages/Contact";
import { HomePage } from "../pages/Home";
import { Residence } from "../pages/Residence";
import { ViewVilla } from "../pages/ViewVilla";
import { ViewApartment } from "../pages/ViewApartment";

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
        <Route path="/villas" element={<Villas />} />
        <Route path="/view-villa/:id" element={<ViewVilla />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
