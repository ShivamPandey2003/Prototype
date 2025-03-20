import { PersonalizingTheOfferData } from "../constant";
import PresentingPropertyCard from "./PresentingPropertyCard";

const PersonalizingTheOffer = () => {
  return (
    <div>
      <PresentingPropertyCard
        {...PersonalizingTheOfferData}
      />
    </div>
  );
};

export default PersonalizingTheOffer;
