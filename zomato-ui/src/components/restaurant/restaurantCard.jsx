import { motion } from "framer-motion";
import { useAuth } from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { restaurantService } from "../../services/restaurantService";

const RestaurantCard = ({ restaurant, onDeleted }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this restaurant?"
    );
    if (!confirmDelete) return;

    try {
      await restaurantService.deleteRestaurant(restaurant.id);
      onDeleted?.();
    } catch (err) {
      alert("Failed to delete restaurant");
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <img
        src={restaurant.imageUrl || "/placeholder.jpg"}
        alt={restaurant.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {restaurant.name}
        </h3>

        <p className="text-sm text-gray-500">
          {restaurant.city}
        </p>

        <p className="text-sm mt-2 text-green-600">
          ⭐ {restaurant.rating || "4.0"}
        </p>

        {/* 🔐 Admin Actions */}
        {user?.role === "Admin" && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={() =>
                navigate(`/admin/restaurants/edit/${restaurant.id}`)
              }
              className="flex-1 bg-blue-500 text-white py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="flex-1 bg-red-500 text-white py-1 rounded"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
