import React from "react";
import { Bath, Bed, Home } from "lucide-react";

interface PropertyCardProps {
  matchPercentage: number;
  address: string;
  distance: string;
  price: string;
  saleDate: string;
  bedrooms: number;
  baths: number;
  sqft: number;
  similarFeatures: string[];
  keyDifferences: string[];
}

const PresentingPropertyCard : React.FC<PropertyCardProps> = ({
  matchPercentage,
  address,
  distance,
  price,
  saleDate,
  bedrooms,
  baths,
  sqft,
  similarFeatures,
  keyDifferences,
}) => {
  return (
    <div className="bg-blue-100 p-2 rounded-lg shadow-lg max-w-2xl mx-auto relative">
      <div className="relative mb-2">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Property"
          className="w-full h-60 object-cover rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {matchPercentage}% Match
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg -mt-12 shadow-md relative">
        <h3 className="text-lg font-bold text-blue-900">{address}</h3>
        <p className="text-blue-700 text-sm">{distance} away</p>

        <div className="flex items-center justify-between mt-2 text-blue-800">
          <div className="flex items-center space-x-1">
            <Bed size={18} />
            <span>{bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath size={18} />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <Home size={18} />
            <span>{sqft.toLocaleString()} Sqft</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-2xl font-bold text-blue-900">${price}</p>
          <p className="text-sm text-gray-500">Price per SqFt</p>
        </div>
        <p className="text-sm text-gray-600">Sold on {saleDate}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-blue-800">
        <div>
          <h4 className="font-semibold mb-2">Similar features</h4>
          <ul className="list-disc ml-4 space-y-1">
            {similarFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Key differences</h4>
          <ul className="list-disc ml-4 space-y-1">
            {keyDifferences.map((difference, index) => (
              <li key={index}>{difference}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresentingPropertyCard;
