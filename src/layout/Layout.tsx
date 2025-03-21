import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {

  return (
    <div className="flex items-start justify-start">
      <Aside />
      <div className="lg:w-4/5">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
