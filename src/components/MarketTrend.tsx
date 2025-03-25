import { useEffect, useState } from "react";
import MarketTrendCard from "./MarketTrendCard";
import { SkeletonCard3 } from "./SkeletonCard";
import { Titles } from "../constant";
import Chat from "./Chat";

const MarketTrend = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 4000);
  }, []);

  return (
    <div className="flex w-full mt-[5rem] overflow-hidden">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-1/2 lg:h-[35rem] overflow-y-auto">
        <p className="text-center my-2 text-[#0b43be] font-semibold">
          {Titles[location.pathname as keyof typeof Titles]}
        </p>
          {!isLoading ? <SkeletonCard3 /> : <MarketTrendCard />}
      </div>
    </div>
  );
};

export default MarketTrend;
