import { Titles } from "../constant";
import Chat from "./Chat";
import QualityScoreCard from "./QualityScroeCard";

const PropertyCondition = () => {
  return (
    <div className="flex w-full">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
        <p className="text-center my-2 text-[#0b43be] font-semibold">
        {Titles[location.pathname as keyof typeof Titles]}
        </p>
        <QualityScoreCard />
      </div>
    </div>
  );
};

export default PropertyCondition;
