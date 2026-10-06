import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh ">
      <Navbar />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
