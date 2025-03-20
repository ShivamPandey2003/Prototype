import { propertyData } from "../constant";
import PropertyCarousel from "./Carousel";

const PresentingProperty = () => {

  return (
    <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
      <p className="text-center my-2 text-[#0b43be] font-semibold">
        Presenting Comparable Properties
      </p>
        <PropertyCarousel properties={propertyData}/>
    </div>
  );
};

export default PresentingProperty;
