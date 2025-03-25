import React from "react";
import { Bath, Bed, Home } from "lucide-react";
import { Location } from "../assets/Icons/Icons";
import { twMerge } from "tailwind-merge";

export interface PropertyCardProps {
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
  image: string;
  className?: string
}

const PresentingPropertyCard: React.FC<PropertyCardProps> = ({
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
  className
}) => {
  return (
    <div className={twMerge("rounded-3xl bg-[#D3E4FF] shadow-lg w-4/5 max-w-2xl mx-auto relative", className)}>
      <div className="bg-[#B8D4FF] p-4 rounded-3xl">
        <div className="relative mb-2">
          <img
            src="https://mira.thinkbar.tech/assets/verifyProperty-CwcA3PU6.png"
            alt="Property"
            className="w-full h-80 object-cover rounded-lg"
          />
          <div className="absolute -top-3 -left-3 bg-green-500 text-white text-lg text-center leading-[1rem] border-[8px] border-[#B8D4FF] font-bold p-3 rounded-full">
            {matchPercentage}% <br />{" "}
            <span className="text-sm font-normal">Match</span>
          </div>
          <div className="absolute -bottom-5 right-0 bg-[#B8D4FF] text-4xl px-4 py-4 rounded-tl-4xl font-bold leading-[1.2rem] text-[#1354b6] text-end">
            ${price}
            <br />
            <span className="text-sm font-normal">Price per Sqft</span>
          </div>
        </div>
        <div className="p-4 relative">
          <div className="flex justify-between gap-4">
            <div>
              <div className="flex gap-2">
                <Location />
                <h3 className="text-xl font-bold text-[#1354b6] leading-[1.4rem]">
                  {address}
                </h3>
              </div>
              <p className="text-[#1354b6] text-sm ml-[2.6rem]">
                {distance} away
              </p>
            </div>
            <div>
              <p className="text-[#1354b6] font-semibold">Sold</p>
              <p className="text-[#1354b6] font-semibold">{saleDate}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 text-blue-800">
            <div className="flex items-center space-x-1">
              <div className="bg-[#1354B6] rounded-full p-2">
                <Bed size={24} className="text-white" />
              </div>
              <span className="text-lg leading-[1rem]">
                <span className="font-bold">{bedrooms}</span>
                <br />
                <span className="text-sm">Bedrooms</span>
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="bg-[#1354B6] rounded-full p-2 text-white">
                <Bath size={24} />
              </div>
              <span className="text-lg leading-[1rem]">
                <span className="font-bold">{baths}</span>
                <br />
                <span className="text-sm">Baths</span>
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="bg-[#1354B6] rounded-full p-2 text-white">
                <Home size={24} />
              </div>
              <span className="text-lg leading-[1rem]">
                <span className="font-bold">{sqft.toLocaleString()}</span>
                <br />
                <span className="text-sm">Sqft</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-lg mt-2 text-blue-800 p-4 px-6">
        <div className="w-full flex gap-20 items-center">
          <h4 className="font-semibold mb-2">Similar features</h4>
            <h4 className="font-semibold mb-2">Key differences</h4>
        </div>
        <div className="border-t-2 border-black/10 my-3"></div>
        <div className="w-full flex justify-between items-center">
          <ul className="list-disc ml-4 space-y-1">
            {keyDifferences.map((difference, index) => (
              <li key={index}>{difference}</li>
            ))}
          </ul>
          <ul className="list-disc ml-4 space-y-1">
            {similarFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresentingPropertyCard;
