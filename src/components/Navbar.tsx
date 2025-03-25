import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();

  const getpClass = (path: string) => {
    return location.pathname === path
      ? "border-[#67d3bf] border-b-2 border-t-2 border-r-2 text-gray-50"
      : "border-none text-gray-50/30";
  };

  const data = useSelector((state: any) => state.Home[`${location.pathname}`]);

  return (
    <div className="w-full bg-[#0b43be] lg:h-[5rem] hidden md:flex relative text-sm leading-4 text-center">
      {data.length > 0 ? (
        <Link
          to={"/create"}
          className={`flex items-center left-0 bg-[#5d9dfe] w-1/6 rounded-r-full z-50 ${getpClass(
            "/create"
          )}`}
        >
          Verifying Property information
        </Link>
      ) : (
        <p
          className={`flex items-center left-0 bg-[#5d9dfe] w-1/6 rounded-r-full z-50 ${getpClass(
            "/create"
          )}`}
        >
          Verifying Property information
        </p>
      )}
      {data.length > 0 ? (
        <Link
          to={"/create/presenting-comparable"}
          className={`absolute left-1/7 h-full flex items-center bg-[#468ffe] w-1/6 rounded-r-full z-40 px-6 ${getpClass(
            "/create/presenting-comparable"
          )}`}
        >
          Presenting Comparable Properties
        </Link>
      ) : (
        <p
          className={`absolute left-1/7 h-full flex items-center bg-[#468ffe] w-1/6 rounded-r-full z-40 px-6 ${getpClass(
            "/create/presenting-comparable"
          )}`}
        >
          Presenting Comparable Properties
        </p>
      )}
      {data.length > 0 ? (
        <Link
          to={"/create/analyzing-current-market"}
          className={`absolute left-2/7 h-full flex items-center bg-[#2f7cf2] w-1/6 rounded-r-full z-30 px-6 ${getpClass(
            "/create/analyzing-current-market"
          )}`}
        >
          Analyzing Current Market Conditions
        </Link>
      ) : (
        <p
          className={`absolute left-2/7 h-full flex items-center bg-[#2f7cf2] w-1/6 rounded-r-full z-30 px-6 ${getpClass(
            "/create/analyzing-current-market"
          )}`}
        >
          Analyzing Current Market Conditions
        </p>
      )}
      {data.length > 0 ? (
        <Link
          to={"/create/property-condition"}
          className={`absolute left-3/7 h-full flex items-center bg-[#0d64e9] w-1/6 rounded-r-full z-20 px-6 ${getpClass(
            "/create/property-condition"
          )}`}
        >
          Property Condition Input
        </Link>
      ) : (
        <p
          className={`absolute left-3/7 h-full flex items-center bg-[#0d64e9] w-1/6 rounded-r-full z-20 px-6 ${getpClass(
            "/create/property-condition"
          )}`}
        >
          Property Condition Input
        </p>
      )}
      {data.length > 0 ? (
        <Link
          to={"/create/personalizing-the-offer"}
          className={`absolute left-4/7 h-full flex items-center bg-[#1058c5] w-1/6 rounded-r-full z-10 px-6 ${getpClass(
            "/create/personalizing-the-offer"
          )}`}
        >
          Personalizing The Offer
        </Link>
      ) : (
        <p
          className={`absolute left-4/7 h-full flex items-center bg-[#1058c5] w-1/6 rounded-r-full z-10 px-6 ${getpClass(
            "/create/personalizing-the-offer"
          )}`}
        >
          Personalizing The Offer
        </p>
      )}
      {data.length > 0 ? (
        <Link
          to={"/create/recommended-offer"}
          className={`absolute left-5/7 h-full flex items-center bg-[#0b43be] w-1/6 rounded-r-full px-6 ${getpClass(
            "/create/recommended-offer"
          )}`}
        >
          The Recommended Offer
        </Link>
      ) : (
        <p
          className={`absolute left-5/7 h-full flex items-center bg-[#0b43be] w-1/6 rounded-r-full px-6 ${getpClass(
            "/create/recommended-offer"
          )}`}
        >
          The Recommended Offer
        </p>
      )}
    </div>
  );
};

export default Navbar;
