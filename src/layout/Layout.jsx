import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/header";

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1">
        {/* <Sidebar/> */}
        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};
