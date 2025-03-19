import React from "react";
import { Bath, Bed, Ruler, Calendar, Users, Grid } from "lucide-react";

const PropertyDetails = () => {
  return (
    <div className="bg-blue-100 p-2 rounded-lg shadow-lg mt-2 max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4 mb-2 text-blue-700">
        <InfoCard icon={<Bed />} label="20 Bedrooms" />
        <InfoCard icon={<Bath />} label="20 Baths" />
        <InfoCard icon={<Ruler />} label="10,00000 Square feet" />
        <InfoCard icon={<Calendar />} label="1945 Built In" />
        <InfoCard icon={<Grid />} label="N/A HOA / mo" />
        <InfoCard icon={<Users />} label="Single Family Home" />
      </div>
      <div className="bg-blue-200 p-4 rounded-lg mb-2 text-blue-900 text-sm">
        <p>
          <strong className="font-semibold">+ Entrance Foyer</strong> - Roman Tub,
          Volume Ceilings, Walk-In Closet(s), Maid/In-Law Quarters, Storage
        </p>
        <p>
          <strong className="font-semibold">+ Flooring</strong> - Marble, Wood
        </p>
        <p>
          <strong className="font-semibold">+ Windows</strong> - Clear Impact Glass,
          Impact Glass
        </p>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label }: {icon: React.JSX.Element, label:string}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="p-2 bg-white rounded-full shadow">
        {icon}
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
};

export default PropertyDetails;
