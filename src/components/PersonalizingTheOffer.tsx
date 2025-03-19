import PresentingPropertyCard from './PresentingPropertyCard'

const PersonalizingTheOffer = () => {
  return (
    <div className="bg-[#f4f4f4] md:w-3/5 lg:h-[35rem] px-16">
      <p className="text-center my-2 text-[#0b43be] font-semibold">
      Personalizing The Offer
      </p>
      <div className="rounded-xl p-1 w-full bg-[#b8d4ff]">
        <PresentingPropertyCard
          matchPercentage={94}
          address="123 Palm Avenue"
          distance="0.8 miles"
          price="223,000"
          saleDate="Dec 14, 2024"
          bedrooms={20}
          baths={20}
          sqft={1000000}
          similarFeatures={[
            "Identical Mid-Century Style",
            "Similar Tropical Landscaping",
            "Matching White Exterior",
          ]}
          keyDifferences={[
            "Entry: No Pavers",
            "Palm Trees: Fewer",
            "Windows: Original",
          ]}
        />
      </div>
    </div>
  )
}

export default PersonalizingTheOffer