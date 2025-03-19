import VerifyPropertyCard from './VerifyPropertyCard'
import PropertyDetails from './PropertyDetails'

const VerifyProperty = () => {
  return (
    <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
      <p className="text-center my-2 text-[#0b43be] font-semibold">
        Verifying Property information
      </p>
      <div className="rounded-xl p-1 w-full bg-[#b8d4ff]">
        <VerifyPropertyCard/>
        <PropertyDetails/>
      </div>
    </div>
  )
}

export default VerifyProperty