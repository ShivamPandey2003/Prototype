import Matches from "./Matches";
import PropertyCard from "./PropertyCard";

const RecommendedOffer = () => {
  return (
    <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-3">
      <p className="text-center my-2 text-[#0b43be] font-semibold">
        Presenting the Recommended Offer
      </p>
      <div className="rounded-xl p-1 w-full bg-[#b8d4ff]">
        <div className="flex">
          <PropertyCard />
          <Matches />
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-[#e6f0ff] rounded-xl p-2 mt-1">
          <p className="text-sm text-[#0b43be]">Offer savant reccomendation</p>
          <div className="w-full flex gap-3 items-center justify-center mt-1">
            <div className="rounded-full text-white bg-[#0b43be] px-6 py-1 text-2xl font-semibold w-2/5 text-center">
              $787,800
            </div>
            <div className="rounded-full text-[#0b43be] font-semibold bg-white px-4 text-sm">
              +$10000
            </div>
          </div>
          <p className="mt-4 text-sm text-[#0b43be] font-semibold">
            This aggresive offer maximizes your chances of winning the home
          </p>
        </div>
        <div className="flex mt-1 gap-3">
          <div className="w-2/7 p-2 bg-white text-center rounded-xl">
            <p className="text-xs text-[#0b43be]">Win Probability</p>
            <p className="text-2xl my-2 text-[#0b43be] font-semibold">89%</p>
          </div>
          <div className="w-3/7 p-2 bg-white rounded-xl">
            <p className="text-xs text-[#0b43be]">Offer strategy</p>
            <p className="text-2xl my-2 text-[#0b43be] font-semibold">
              More aggressive
            </p>
          </div>
          <div className="w-4/7 p-2 bg-white rounded-xl">
            <p className="text-sm text-[#0b43be]">Your Offer</p>
            <p className="text-2xl my-2 text-[#0b43be] font-semibold">
              $787,800
            </p>
            <p className="text-end text-sm text-[#0b43be]">{`(+0.1%)`}</p>
          </div>
        </div>
        <div className="flex mt-1 gap-3">
          <div className="w-4/7 p-2 bg-white rounded-xl">
            <p className="text-xs text-[#0b43be]">Market conditions</p>
            <div className="flex flex-col md:flex-row md:items-center w-full px-3">
              <p className="w-4/5 text-2xl my-2 text-[#0b43be] font-semibold">Seller's market</p>
              <p className="w-1/5 text-xs my-2 text-[#0b43be] font-semibold text-center">High competition</p>
            </div>
          </div>
          <div className="w-3/7 bg-gray-400 rounded-xl p-2">
          <p className="text-sm text-black">List Offer</p>
            <p className="text-xl my-2 text-black font-semibold">
              $787,800
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedOffer;
