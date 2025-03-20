import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import PresentingPropertyCard, { PropertyCardProps } from './PresentingPropertyCard';


interface PropertyCarouselProps {
  properties: PropertyCardProps[];
}

const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ properties }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {properties.map((property, index) => (
            <div className="flex-[0_0_100%]" key={index}>
              <div className="p-1">
                <PresentingPropertyCard {...property} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="">
        <button
          onClick={scrollPrev}
          className={cn(
            " absolute p-2 -left-10 top-1/2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300",
            "border border-gray-200 text-gray-800"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className={cn(
            " absolute p-2 -right-10 top-1/2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-300",
            "border border-gray-200 text-gray-800"
          )}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PropertyCarousel;
