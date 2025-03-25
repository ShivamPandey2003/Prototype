import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const getpClass = (path: string) => {
    return location.pathname === path
      ? "border-[#67d3bf] border-b-3 border-t-3 border-r-3 text-gray-50"
      : "border-none text-gray-50/30";
  };

  return (
    <div className="w-auto bg-[#0b43be] lg:h-[5rem] hidden md:flex relative text-sm leading-4 text-center">
      <Link
        to={"/create"}
        className={`flex items-center justify-center left-0 bg-[#5d9dfe] w-1/7 rounded-r-full z-50 ${getpClass(
          "/create"
        )}`}
      >
       <p className="mx-12">Verifying Property information</p>
      </Link>
      <Link
        to={"/create/presenting-comparable"}
        className={`absolute left-1/9 h-full flex items-center justify-center bg-[#468ffe] w-1/7 rounded-r-full z-40 px-6 ${getpClass(
          "/create/presenting-comparable"
        )}`}
      >
        <p className="mx-12">Presenting Comparable Properties</p>
      </Link>
      <Link
        to={"/create/analyzing-current-market"}
        className={`absolute left-2/9 h-full flex items-center bg-[#2f7cf2] w-1/7 rounded-r-full z-30 px-6 justify-center ${getpClass(
          "/create/analyzing-current-market"
        )}`}
      >
        <p className="mx-12">Analyzing Current Market Conditions</p>
      </Link>
      <Link
        to={"/create/property-condition"}
        className={`absolute left-3/9 h-full flex items-center justify-center bg-[#0d64e9] w-1/7 rounded-r-full z-20 px-6 ${getpClass(
          "/create/property-condition"
        )}`}
      >
        <p className="mx-12">Property Condition Input</p>
      </Link>
      <Link
        to={"/create/personalizing-the-offer"}
        className={`absolute left-4/9 h-full flex items-center justify-center bg-[#1058c5] w-1/7 rounded-r-full z-10 px-6 ${getpClass(
          "/create/personalizing-the-offer"
        )}`}
      >
        <p className="mx-12">Personalizing The Offer</p>
      </Link>
      <Link
        to={"/create/recommended-offer"}
        className={`absolute left-5/9 h-full flex items-center justify-center bg-[#0b43be] w-1/7 rounded-r-full px-6 ${getpClass(
          "/create/recommended-offer"
        )}`}
      >
        <p className="mx-12">The Recommended Offer</p>
      </Link>
    </div>
  );
};

export default Navbar;
