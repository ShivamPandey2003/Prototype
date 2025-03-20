
export const SkeletonCard = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center p-1 rounded-lg">
      <div className="grid grid-cols-3 gap-2 max-w-4xl w-full">
        <div className="bg-gray-200 col-span-3 rounded-lg h-36 animate-pulse"></div>
        <div className="bg-gray-200 col-span-2 rounded-lg h-36 animate-pulse"></div>
        <div className="bg-gray-200 col-span-1 rounded-lg h-36 animate-pulse"></div>
        <div className="bg-gray-200 col-span-1 rounded-lg h-36 animate-pulse"></div>
        <div className="bg-gray-200 col-span-1 rounded-lg h-36 animate-pulse"></div>
        <div className="bg-gray-200 col-span-1 rounded-lg h-36 animate-pulse"></div>
      </div>
      
      <div className="absolute flex flex-col items-center top-[50%]">
        <div className="h-12 w-12 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-gray-600 max-w-xs text-center">
          Understanding Your Goals: We discussed your definition of a winning offer and what your dream home looks like.
        </p>
      </div>
    </div>
  )
}

export const SkeletonCard2 = () => {
  return (
    <div className="w-4/5 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-60 bg-gray-200 animate-pulse" />
      <div className="p-4 space-y-4">
        <div className="h-4 bg-gray-200 rounded-full w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded-full w-2/4 animate-pulse" />
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-3 bg-gray-200 rounded-full w-5/6 animate-pulse" />
          <div className="h-3 bg-gray-200 rounded-full w-4/6 animate-pulse" />
          <div className="h-3 bg-gray-200 rounded-full w-3/6 animate-pulse" />
        </div>
        <div className="flex items-center space-x-2 pt-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-8 bg-gray-200 rounded-full w-24 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function CircularProgress() {
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
}

export const SkeletonCard3 = () => {
  return(
    <div className="w-4/5 bg-white rounded-xl shadow-lg mx-auto overflow-hidden">
      <div className="relative">
        <div className="w-full h-48 bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
            alt="House"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <CircularProgress />
        </div>
      </div>
      <div className="p-3 space-y-4">
        <div className="text-sm text-gray-400">
          Price Trends: How property values in the area have been changing recently...
        </div>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <div 
              key={index}
              className="h-10 bg-gray-200 rounded-lg animate-pulse w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}