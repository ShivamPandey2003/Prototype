import { propertyData, Titles } from "../constant"
import PropertyCarousel from "./Carousel"
import Chat from "./Chat"


const PresentingProperty = () => {
  return (
    <div className="flex w-full mt-[5rem] overflow-hidden">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-1/2 lg:h-[35rem] overflow-y-auto overflow-x-hidden">
        <p className="text-center my-2 text-[#0b43be] font-semibold">
        {Titles[location.pathname as keyof typeof Titles]}
        </p>
        <PropertyCarousel properties={propertyData}/>
      </div>
    </div>
  )
}

export default PresentingProperty