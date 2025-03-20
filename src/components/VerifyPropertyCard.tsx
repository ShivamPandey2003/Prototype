import { useState } from "react";
import { images } from "../constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropertyDetails from "./PropertyDetails";

const VerifyPropertyCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center rounded-lg w-4/5 mx-auto">
      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        <div className="relative">
          <img
            src={images[currentIndex].url}
            alt={`Luxury House ${currentIndex + 1}`}
            className="w-full h-64 object-cover transition-opacity duration-500"
          />
          
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Price Tag */}
          <div className="absolute bottom-4 left-4 bg-blue-100 text-blue-700 text-xl font-semibold px-4 py-2 rounded-lg shadow">
            ${images[currentIndex].price}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <PropertyDetails />
    </div>
  );
};

export default VerifyPropertyCard;
