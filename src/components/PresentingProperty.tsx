import { propertyData, Titles } from "../constant"
import PropertyCarousel from "./Carousel"
import Chat from "./Chat"


const PresentingProperty = () => {
  return (
    <div className="flex w-full mt-[5rem] overflow-hidden">
      <Chat />
      <div className="bg-[#f4f4f4] md:w-1/2 lg:h-[35rem] overflow-y-auto overflow-x-hidden">
        <p className="font-[ClashDisplay-Medium] text-xl leading-9 textColor mb-4 text-center">
        {Titles[location.pathname as keyof typeof Titles]}
        </p>
        <PropertyCarousel properties={propertyData}/>
      </div>
    </div>
  )
}

export default PresentingProperty