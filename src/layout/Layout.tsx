import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import { Outlet, useLocation } from "react-router";
import { Titles } from "../constant";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex items-start justify-start">
      <Aside />
      <div className="lg:w-4/5">
        <Navbar />
        <div className="flex w-full">
          <Chat />
          <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
            <p className="text-center my-2 text-[#0b43be] font-semibold">
              {Titles[location.pathname as keyof typeof Titles]}
            </p>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
