import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex items-start justify-start">
      <Aside />
      <div className="ml-[280px] w-full flex-1 overflow-x-hidden">
        <div className="fixed top-0 w-full z-50">
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
