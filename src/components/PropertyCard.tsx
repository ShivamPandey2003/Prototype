import React from "react";

const PropertyCard = () => {
  return (
    <div className="relative w-1/2 rounded-lg overflow-hidden">
      {/* Property Image */}
      <img
        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Property"
        className="w-full h-full lg:h-44 object-cover"
      />

      {/* Match Percentage */}
      <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
        95% Match
      </div>

      {/* Property Details */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-b-lg">
        <p className="truncate">
          XYZ Building, 1234 road, Fl, 1000048
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
