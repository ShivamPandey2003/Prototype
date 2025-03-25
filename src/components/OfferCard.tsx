export const OfferCardSkeleton = () => {
  return (
    <div className="w-64 h-[164px] rounded-2xl border-[#797979] bg-transparent border-[2px] opacity-15"></div>
  );
};

const OfferCard = () => (
  <div className="w-[216px] h-[174px] rounded-[20px] shadow-lg overflow-hidden flex flex-col relative bg-white ">
    <div className="flex flex-col h-full p-2">
      <div className="flex-1 overflow-hidden">
        <img
          alt="xyz 123 road, 20555 - Offer 1"
          className="w-full h-full object-cover rounded-[20px]"
          src="https://mira.thinkbar.tech/assets/placeholder-BBUHf6ZF.png"
        />
      </div>
      <div className="bg-transparent text-sm p-2 text-center text-black font-normal">
        xyz 123 road, 20555 - Offer 1
      </div>
    </div>
  </div>
);

export default OfferCard;
