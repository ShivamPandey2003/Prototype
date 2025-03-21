import { PersonalizingTheOfferData, Titles } from "../constant";
import Chat from "./Chat";
import PresentingPropertyCard from "./PresentingPropertyCard";

const PersonalizingTheOffer = () => {
  return (
    <div className="flex w-full">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
        <p className="text-center my-2 text-[#0b43be] font-semibold">
        {Titles[location.pathname as keyof typeof Titles]}
        </p>
        <PresentingPropertyCard
        {...PersonalizingTheOfferData}
      />
      </div>
    </div>
  );
};

export default PersonalizingTheOffer;
