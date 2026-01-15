import { useEffect, useState } from "react";
import { restaurantService } from "../services/restaurantService";
import RestaurantCard from "../components/restaurant/restaurantCard";
import RestaurantSkeleton from "../components/skeletons/RestaurantSkeleton";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setLoading(true);

      const data = await restaurantService.getAllRestaurants();
      setRestaurants(data);
    } catch (err) {
      setError("Failed to load restaurants. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  {
    restaurants.map((restaurant) => (
      <RestaurantCard
        key={restaurant.id}
        restaurant={restaurant}
        onDeleted={fetchRestaurants}
      />
    ));
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[...Array(6)].map((_, i) => (
          <RestaurantSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  if (restaurants.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No restaurants available 🍽️
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onDeleted={fetchRestaurants}
        />
      ))}
    </div>
  );
};

export default Restaurants;
