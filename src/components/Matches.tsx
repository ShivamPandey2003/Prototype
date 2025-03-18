const Matches = () => {
  return (
    <div className="w-1/2 px-2">
      <p className="text-center text-[#0b43be] text-xs font-semibold">
        Match with your requirrement
      </p>
      <div className="text-xs bg-white rounded-xl px-6 py-2 pb-6 mt-2 relative">
        <div className="h-5 w-5 bg-[#0b43be] absolute top-0 left-0 rounded-full border-2 border-[#b8d4ff]" />
        <p className="text-[#0b43be] font-semibold">Matches</p>
        <ul className="list-disc mt-1">
          <li>Amenities are distant</li>
          <li>High Neighborhood Safety</li>
          <li>High Quality of Local Schools</li>
        </ul>
      </div>
      <div className="text-xs bg-white rounded-xl px-6 py-2 pb-6 mt-2 relative">
        <div className="h-5 w-5 bg-[#0b43be] absolute top-0 left-0 rounded-full border-2 border-[#b8d4ff]" />
        <p className="text-[#0b43be] font-semibold">Partial Match</p>
        <p className="mt-1">Kitchen size slightly smaller than pretend</p>
      </div>
    </div>
  );
};

export default Matches;
