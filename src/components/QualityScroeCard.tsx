import { Info, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { propertyQualityData } from "../constant";

const QualityScoreCard = () => {
  return (
    <div className="w-4/5 mx-auto p-2 space-y-4">
      <div className="bg-[#dbe9ff] p-4 rounded-[33px] rounded-tl-none shadow flex items-start justify-between relative mt-10">
        <div className="absolute rounded-t-4xl -top-11 left-0 bg-[#dbe9ff] text-blue-700 px-3 py-2 font-medium text-lg">
          {propertyQualityData.overallQuality.title}
        </div>
        <div className="absolute -top-8 right-5 text-blue-700 flex items-center font-medium text-lg gap-2">
          Quality score
          <Info className="text-blue-400 cursor-pointer" size={20} />
        </div>
        <div className="bg-[#F5F7FA] flex items-center p-4 gap-4 rounded-[33px]">
          <div className="rounded-[25px] p-2 px-4 bg-[#dbe9ff]">
            <p className="text-2xl font-bold text-blue-900">
              {propertyQualityData.overallQuality.score}
            </p>
          </div>
          <div>
            <p className="text-blue-700 font-bold text-2xl">
              {propertyQualityData.overallQuality.category}
            </p>
            <p className="text-gray-500 text-sm">
              {propertyQualityData.overallQuality.description}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#dbe9ff] p-2 rounded-4xl relative">
        <div className="absolute bg-[#dbe9ff] text-xl font-medium text-blue-900 p-2 px-6 rounded-b-2xl top-0 left-15 z-[30]">
          {propertyQualityData.exterior.title}
        </div>
        <div className="relative">
          <img
            src={propertyQualityData.exterior.image.url}
            alt={propertyQualityData.exterior.image.alt}
            className="w-full h-100 object-cover rounded-4xl"
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronLeft size={20} className="text-blue-500" />
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronRight size={20} className="text-blue-500" />
          </button>
          <div className="absolute bottom-4 left-16 space-y-2">
            {propertyQualityData.exterior.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-2 rounded-full flex items-center space-x-1 shadow-md"
              >
                <CheckCircle className="text-blue-500" size={16} />
                <p className="text-blue-700 text-xs">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 px-6 flex items-center gap-8 justify-">
            <p className="text-3xl font-bold text-blue-900">
              {propertyQualityData.secondaryQuality.score}
            </p>
          <div>
            <p className="text-blue-700 font-bold text-2xl">
              {propertyQualityData.secondaryQuality.category}
            </p>
            <p className="text-gray-500 text-sm">
              {propertyQualityData.secondaryQuality.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityScoreCard;
