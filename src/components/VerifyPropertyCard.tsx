const VerifyPropertyCard = () => {
  return (
    <div className="relative w-full max-w-full rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Luxury House"
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="absolute bottom-4 left-4 bg-blue-100 text-blue-700 text-xl font-semibold px-4 py-2 rounded-lg shadow">
        $4,995,000
      </div>
    </div>
  );
};

export default VerifyPropertyCard;
