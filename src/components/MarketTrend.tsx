import { useEffect, useState } from "react";
import MarketTrendCard from "./MarketTrendCard";
import { SkeletonCard3 } from "./SkeletonCard";

const MarketTrend = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 4000);
  }, []);

  return (
    <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
      <p className="text-center my-2 text-[#0b43be] font-semibold">
        Analyzing Current Market Conditions
      </p>
      <div className="rounded-xl p-1 w-full bg-[#b8d4ff]">
        {!isLoading ? <SkeletonCard3 /> : <MarketTrendCard />}
      </div>
    </div>
  );
};

export default MarketTrend;
