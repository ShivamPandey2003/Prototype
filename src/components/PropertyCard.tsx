import { RecommendedOfferData } from "../constant";

const PropertyCard = () => {
  return (
    <div className="relative w-1/2 rounded-lg overflow-hidden">
      {/* Property Image */}
      <img
        src={RecommendedOfferData.image.image.url}
        alt={RecommendedOfferData.image.image.alt}
        className="w-full h-full lg:h-44 object-cover"
      />

      {/* Match Percentage */}
      <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
        {RecommendedOfferData.image.matchPercentage}% Match
      </div>

      {/* Property Details */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-b-lg">
        <p className="truncate">
          {RecommendedOfferData.image.address}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
