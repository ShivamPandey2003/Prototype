import { useState } from "react";
import { BarChart, DollarSign, TrendingDown, Calendar } from "lucide-react";

const MarketTrendCard = () => {
  const [activeTab, setActiveTab] = useState<"Home" | "Neighbourhood" | "City">(
    "Home"
  );

  return (
    <div className="bg-blue-100 p-1 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="flex space-x-4 mb-1 text-blue-700 font-semibold">
        {["Home", "Neighbourhood", "City"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-1 rounded-t-lg ${
              activeTab === tab
                ? "bg-white shadow text-blue-900"
                : "bg-blue-200 text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative bg-white p-4 rounded-lg shadow mb-2">
        <div className="w-full h-10 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full relative">
          <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full"></div>
        </div>
        <div className="flex justify-between text-sm text-blue-700 font-semibold mt-2">
          <span>Seller's market</span>
          <span>Buyers Market</span>
        </div>
        <p className="text-center text-yellow-600 font-bold">Balanced Market</p>
      </div>
      <div className="bg-blue-50 p-2 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-blue-900 mb-1">Price Trends</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <DollarSign className="text-blue-500" size={20} />
              <div>
                <p className="text-blue-900 font-semibold">Median Price</p>
                <p className="text-green-500 text-xs">5.2% From Last Year</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-blue-900">$100,000</p>
          </div>
          <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <BarChart className="text-blue-500" size={20} />
              <div>
                <p className="text-blue-900 font-semibold">Sale To List Ratio</p>
                <p className="text-gray-500 text-xs">
                  2.5% Below Asking On Avg.
                </p>
              </div>
            </div>
            <p className="text-2xl font-bold text-blue-900">97.5%</p>
          </div>
          <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <TrendingDown className="text-blue-500" size={20} />
              <div>
                <p className="text-blue-900 font-semibold">
                  Price Reduced Listings
                </p>
                <p className="text-green-500 text-xs">+5% From Last Month</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-blue-900">24%</p>
          </div>
          <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <Calendar className="text-blue-500" size={20} />
              <div>
                <p className="text-blue-900 font-semibold">
                  Median Days on Market
                </p>
                <p className="text-green-500 text-xs">
                  ↑ 16 Days YoY | ↑ 2 Days MoY
                </p>
              </div>
            </div>
            <p className="text-2xl font-bold text-blue-900">46 Days</p>
          </div>
          <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <p className="text-blue-900 font-semibold">Other</p>
            </div>
            <p className="text-2xl font-bold text-blue-900">0000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrendCard;
