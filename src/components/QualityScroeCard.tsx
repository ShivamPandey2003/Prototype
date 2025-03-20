import { Info, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { propertyQualityData } from "../constant";

const QualityScoreCard = () => {
  return (
    <div className="max-w-lg w-4/5 mx-auto bg-blue-50 p-2 rounded-lg shadow-lg space-y-4">
      <div className="bg-white p-2 rounded-lg shadow flex items-start justify-between">
        <div>
          <h2 className="text-blue-600 font-semibold text-md">
            {propertyQualityData.overallQuality.title}
          </h2>
          <p className="text-2xl font-bold text-blue-900">
            {propertyQualityData.overallQuality.score}
          </p>
          <p className="text-blue-700 font-semibold">
            {propertyQualityData.overallQuality.category}
          </p>
          <p className="text-gray-500 text-sm">
            {propertyQualityData.overallQuality.description}
          </p>
        </div>
        <Info className="text-blue-400 cursor-pointer" size={20} />
      </div>
      <div className="bg-white p-2 rounded-lg shadow">
        <h3 className="text-blue-600 font-semibold text-lg">
          {propertyQualityData.exterior.title}
        </h3>
        <div className="relative mt-2">
          <img
            src={propertyQualityData.exterior.image.url}
            alt={propertyQualityData.exterior.image.alt}
            className="w-full h-40 object-cover rounded-lg"
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
      </div>
      <div className="bg-white p-2 rounded-lg shadow flex items-start">
        <div>
          <p className="text-2xl font-bold text-blue-900">{propertyQualityData.secondaryQuality.score}</p>
          <p className="text-blue-700 font-semibold">{propertyQualityData.secondaryQuality.category}</p>
          <p className="text-gray-500 text-sm">
            {propertyQualityData.secondaryQuality.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityScoreCard;
