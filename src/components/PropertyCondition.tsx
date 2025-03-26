import { Titles } from "../constant";
import Chat from "./Chat";
import QualityScoreCard from "./QualityScroeCard";

const PropertyCondition = () => {
  return (
    <div className="flex w-full mt-[5rem] overflow-hidden">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-1/2 lg:h-[35rem] px-8 overflow-y-auto">
        <p className="font-[ClashDisplay-Medium] text-xl leading-9 textColor mb-4 text-center">
        {Titles[location.pathname as keyof typeof Titles]}
        </p>
        <QualityScoreCard />
      </div>
    </div>
  );
};

export default PropertyCondition;
