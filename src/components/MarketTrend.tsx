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
    <div>
      {!isLoading ? <SkeletonCard3 /> : <MarketTrendCard />}
    </div>
  );
};

export default MarketTrend;
