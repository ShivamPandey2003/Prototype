import { Info, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const QualityScoreCard = () => {
  return (
    <div className="max-w-lg mx-auto bg-blue-50 p-2 rounded-lg shadow-lg space-y-4">
      <div className="bg-white p-2 rounded-lg shadow flex items-start justify-between">
        <div>
          <h2 className="text-blue-600 font-semibold text-lg">
            Overall quality score
          </h2>
          <p className="text-3xl font-bold text-blue-900">5</p>
          <p className="text-blue-700 font-semibold">Luxe</p>
          <p className="text-gray-500 text-sm">
            In excellent condition with high-quality features and no repairs
            needed.
          </p>
        </div>
        <Info className="text-blue-400 cursor-pointer" size={20} />
      </div>
      <div className="bg-white p-2 rounded-lg shadow">
        <h3 className="text-blue-600 font-semibold text-lg">Exterior</h3>
        <div className="relative mt-2">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="House"
            className="w-full h-40 object-cover rounded-lg"
          />
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronLeft size={20} className="text-blue-500" />
          </button>
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
            <ChevronRight size={20} className="text-blue-500" />
          </button>
          <div className="absolute bottom-4 left-16 space-y-2">
            <div className="bg-white p-2 rounded-full flex items-center space-x-1 shadow-md">
              <CheckCircle className="text-blue-500" size={16} />
              <p className="text-blue-700 text-xs">Fence</p>
            </div>
            <div className="bg-white p-2 rounded-full flex items-center space-x-1 shadow-md">
              <CheckCircle className="text-blue-500" size={16} />
              <p className="text-blue-700 text-xs">Patio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-2 rounded-lg shadow flex items-start">
        <div>
          <p className="text-3xl font-bold text-blue-900">2</p>
          <p className="text-blue-700 font-semibold">Luxe</p>
          <p className="text-gray-500 text-sm">
            In excellent condition with high-quality features and no repairs
            needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityScoreCard;
