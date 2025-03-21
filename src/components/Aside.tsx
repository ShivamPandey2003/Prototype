import { Link } from "react-router";
import { RightArrow, Settings } from "../assets/Icons/Icons";
import OfferCard from "./OfferCard";

const Aside = () => {
  return (
    <div className="hidden lg:block w-1/5 bg-[#e3eeff] relative">
      <div className="flex flex-col justify-center items-center h-[150px] w-full gap-8 border-b-[1px]">
        <div className="flex items-center gap-12">
          <span className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
            <p>UserName</p>
          </span>
          <Settings />
        </div>
        <Link to={'/create'} className="rounded-4xl bg-[#0036ab] w-7/8 h-2/8 flex items-center justify-center gap-2 text-white">
          <span>Create an offer</span>
          <RightArrow />
        </Link>
      </div>
      <div className="w-full mt-[1rem]">
        <p className="ml-[30%] mb-4">Your Offers</p>
        <div
          className="w-full flex flex-col justify-center overflow-y-scroll h-full max-h-[435px] px-4"
          style={{ scrollbarWidth: "none" }}
        >
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
      </div>
      <div className="w-full absolute bottom-0 bg-[#b8d4ff] h-[3rem] rounded-t-2xl flex px-8 items-center justify-between">
        <Link to={'/'} className="font-semibold">Home</Link>
        <p className="font-semibold">FAQ</p>
      </div>
    </div>
  );
};

export default Aside;
