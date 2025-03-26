import { useEffect, useState } from "react";
import Matches from "./Matches";
import PropertyCard from "./PropertyCard";
import { SkeletonCard } from "./SkeletonCard";
import { RecommendedOfferData, Titles } from "../constant";
import Chat from "./Chat";

const RecommendedOffer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 4000);
  }, []);

  return (
    <div className="flex w-full mt-[5rem]">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-1/2 lg:h-[35rem] px-8">
        <p className="font-[ClashDisplay-Medium] text-xl leading-9 textColor mb-4 text-center">
        {Titles[location.pathname as keyof typeof Titles]}
        </p>
        {!isLoading ? (
          <SkeletonCard />
        ) : (
          <div className="rounded-xl p-1 w-full bg-[#b8d4ff]">
            <div className="flex">
              <PropertyCard />
              <Matches />
            </div>
            <div className="w-full flex flex-col items-center justify-center bg-[#e6f0ff] rounded-xl p-2 mt-1">
              <p className="text-sm text-[#0b43be]">{RecommendedOfferData.recommendation.title}</p>
              <div className="w-full flex gap-3 items-center justify-center mt-1">
                <div className="rounded-full text-white bg-[#0b43be] px-6 py-1 text-2xl font-semibold w-2/5 text-center">
                  {RecommendedOfferData.recommendation.offerAmount}
                </div>
                <div className="rounded-full text-[#0b43be] font-semibold bg-white px-4 text-sm">
                  +{RecommendedOfferData.recommendation.increaseAmount}
                </div>
              </div>
              <p className="mt-2 text-sm text-[#0b43be] font-semibold">
                {RecommendedOfferData.recommendation.description}
              </p>
            </div>
            <div className="flex mt-1 gap-3">
              <div className="w-2/7 p-1 bg-white text-center rounded-xl">
                <p className="text-xs text-[#0b43be]">Win Probability</p>
                <p className="text-2xl mt-2 text-[#0b43be] font-semibold">{RecommendedOfferData.offerDetails.winProbability}</p>
              </div>
              <div className="w-3/7 p-1 bg-white rounded-xl">
                <p className="text-xs text-[#0b43be]">Offer strategy</p>
                <p className="text-2xl mt-2 text-[#0b43be] font-semibold">
                  {RecommendedOfferData.offerDetails.offerStrategy}
                </p>
              </div>
              <div className="w-4/7 p-1 bg-white rounded-xl">
                <p className="text-sm text-[#0b43be]">Your Offer</p>
                <p className="text-2xl my-1 text-[#0b43be] font-semibold">{RecommendedOfferData.offerDetails.yourOffer.amount}</p>
                <p className="text-end text-sm text-[#0b43be]">({RecommendedOfferData.offerDetails.yourOffer.percentageChange})</p>
              </div>
            </div>
            <div className="flex mt-1 gap-3">
              <div className="w-4/7 p-2 bg-white rounded-xl">
                <p className="text-xs text-[#0b43be]">Market conditions</p>
                <div className="flex flex-col md:flex-row md:items-center w-full px-3">
                  <p className="w-4/5 text-2xl my-2 text-[#0b43be] font-semibold">
                    {RecommendedOfferData.marketConditions.type}
                  </p>
                  <p className="w-1/5 text-xs my-2 text-[#0b43be] font-semibold text-center">
                    {RecommendedOfferData.marketConditions.competitionLevel}
                  </p>
                </div>
              </div>
              <div className="w-3/7 bg-gray-400 rounded-xl p-2">
                <p className="text-sm text-black">List Offer</p>
                <p className="text-xl my-2 text-black font-semibold">{RecommendedOfferData.listOffer.amount}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ); 
};

export default RecommendedOffer;
