import { Link, useLocation } from "react-router";


const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? "border-[#67d3bf] border-b-2 border-t-2 border-r-2 text-gray-50"
      : "border-none text-gray-50/30";
  };

  return (
    <div className="w-full bg-[#0b43be] lg:h-[5rem] hidden md:flex relative text-sm leading-4">
      <Link
        to="/"
        className={`flex items-center left-0 bg-[#5d9dfe] w-1/6 rounded-r-full z-50 ${getLinkClass(
          "/"
        )}`}
      >
        <p className="text-center">Verifying Property information</p>
      </Link>
      <Link
        to="/presenting-comparable"
        className={`absolute left-1/7 h-full flex items-center bg-[#468ffe] w-1/6 rounded-r-full z-40 px-6 ${getLinkClass(
          "/presenting-comparable"
        )}`}
      >
        <p className="text-center">Presenting Comparable Properties</p>
      </Link>
      <Link
        to="/analyzing-current-market"
        className={`absolute left-2/7 h-full flex items-center bg-[#2f7cf2] w-1/6 rounded-r-full z-30 px-6 ${getLinkClass(
          "/analyzing-current-market"
        )}`}
      >
        <p className="text-center">Analyzing Current Market Conditions</p>
      </Link>
      <Link
        to="/property-condition"
        className={`absolute left-3/7 h-full flex items-center bg-[#0d64e9] w-1/6 rounded-r-full z-20 px-6 ${getLinkClass(
          "/property-condition"
        )}`}
      >
        <p className="text-center">Property Condition Input</p>
      </Link>
      <Link
        to="/personalizing-the-offer"
        className={`absolute left-4/7 h-full flex items-center bg-[#1058c5] w-1/6 rounded-r-full z-10 px-6 ${getLinkClass(
          "/personalizing-the-offer"
        )}`}
      >
        <p className="text-center">Personalizing The Offer</p>
      </Link>
      <Link
        to="/recommended-offer"
        className={`absolute left-5/7 h-full flex items-center bg-[#0b43be] w-1/6 rounded-r-full px-6 ${getLinkClass(
          "/recommended-offer"
        )}`}
      >
        <p className="text-center">The Recommended Offer</p>
      </Link>
    </div>
  );
};

export default Navbar;
