import MarketTrendCard from "./MarketTrendCard";

const MarketTrend = () => {
  return (
    <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
      <p className="text-center my-2 text-[#0b43be] font-semibold">
        Analyzing Current Market Conditions
      </p>
      <div className="rounded-xl p-1 w-full bg-[#b8d4ff]">
        <MarketTrendCard />
      </div>
    </div>
  );
};

export default MarketTrend;
