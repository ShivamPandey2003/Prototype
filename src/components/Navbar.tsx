const Navbar = () => {
  return (
    <div className="w-full bg-[#0b43be] lg:h-[5rem] hidden md:flex relative">
        <div className="flex items-center bg-[#5d9dfe] text-gray-50/30 w-1/6 rounded-r-full z-50">
            <p className="text-center">Verifying Property information</p>
        </div>
        <div className="absolute left-1/7 h-full flex items-center bg-[#468ffe] text-gray-50/30 w-1/6 rounded-r-full z-40 px-4">
            <p className="text-center">Presenting Comparable Propeties</p>
        </div>
        <div className="absolute left-2/7 h-full flex items-center bg-[#2f7cf2] text-gray-50/30 w-1/6 rounded-r-full z-30 px-4">
            <p className="text-center">Analyzing Current Market Conditions</p>
        </div>
        <div className="absolute left-3/7 h-full flex items-center bg-[#0d64e9] text-gray-50/30 w-1/6 rounded-r-full z-20 px-4">
            <p className="text-center">Property Condition Input</p>
        </div>
        <div className="absolute left-4/7 h-full flex items-center bg-[#1058c5] text-gray-50/30 w-1/6 rounded-r-full z-10 px-4">
            <p className="text-center">Personalizing The Offer</p>
        </div>
        <div className="absolute left-5/7 h-full flex items-center bg-[#0b43be] text-gray-50 w-1/6 rounded-r-full px-4 border-[#67d3bf] border-2">
            <p className="text-center">The Recommended Offer</p>
        </div>
    </div>
  )
}

export default Navbar