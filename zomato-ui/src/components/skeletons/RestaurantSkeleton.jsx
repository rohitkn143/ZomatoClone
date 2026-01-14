const RestaurantSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow-md">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default RestaurantSkeleton;
