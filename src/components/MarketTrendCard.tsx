import { useState } from "react";
import { Trends } from "../constant";
import { cn } from "../lib/utils";

const MarketTrendCard = () => {
  const [activeTab, setActiveTab] = useState<"Home" | "Neighbourhood" | "City">(
    "Home"
  );

  return (
    <div className="bg-blue-100 p-1 rounded-lg shadow-lg w-[90%] max-w-2xl mx-auto">
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
        <div className="flex justify-center">
          <svg
            className="speedometer"
            width="350px"
            height="200px"
            role="img"
            focusable="false"
            aria-label="React d3 speedometer"
            style={{ width: 350, height: 200 }}
          >
            <g className="arc" transform="translate(175, 175)">
              <path
                className="speedo-segment"
                fill="#F9462D"
                d="M-155,0A155,155,0,0,1,-77.5,-134.234L-12.5,-21.651A25,25,0,0,0,-25,0Z"
              ></path>
              <path
                className="speedo-segment"
                fill="#F7BE2D"
                d="M-77.5,-134.234A155,155,0,0,1,77.5,-134.234L12.5,-21.651A25,25,0,0,0,-12.5,-21.651Z"
              ></path>
              <path
                className="speedo-segment"
                fill="#3FE972"
                d="M77.5,-134.234A155,155,0,0,1,155,0L25,0A25,25,0,0,0,12.5,-21.651Z"
              ></path>
            </g>
            <g className="label" transform="translate(175, 175)"></g>
            <g transform="translate(175, 175)">
              <text
                className="current-value"
                text-anchor="middle"
                y="23"
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  fill: "transparent",
                }}
              ></text>
            </g>
            <g
              className="pointer"
              transform="translate(175, 175)"
              style={{ fill: "rgb(255, 255, 255)" }}
            >
              <path
                d="M5,0C3.333,-79,1.667,-158,0,-158C-1.667,-158,-3.333,0,-5,0C-3.333,0,-1.667,5,0,5C1.667,5,3.333,2.5,5,0"
                transform="rotate(-45)"
              ></path>
            </g>
          </svg>
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
          {Trends.map((trend, index) => (
            <div
              key={index}
              className={cn(
                trend.icon ? "" : "opacity-70",
                "flex items-center justify-between bg-white p-2 rounded-lg shadow"
              )}
            >
              <div className="flex items-center space-x-2">
                {trend.icon ? (
                  <trend.icon className="text-blue-500" size={20} />
                ) : (
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                )}
                <div>
                  <p className="text-blue-900 font-semibold">{trend.title}</p>
                  <p className="text-green-500 text-xs">{trend.trend}</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-900">{trend.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTrendCard;
