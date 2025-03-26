import { PersonalizingTheOfferData, Titles } from "../constant";
import Chat from "./Chat";
import PresentingPropertyCard from "./PresentingPropertyCard";

const PersonalizingTheOffer = () => {
  return (
    <div className="flex w-full mt-[5rem] overflow-hidden">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-1/2 lg:h-[35rem] px-4 overflow-y-auto">
        <p className="font-[ClashDisplay-Medium] text-xl leading-9 textColor mb-4 text-center">
        {Titles[location.pathname as keyof typeof Titles]}
        </p>
        <PresentingPropertyCard
        {...PersonalizingTheOfferData}
        className="my-4"
      />
      </div>
    </div>
  );
};

export default PersonalizingTheOffer;
