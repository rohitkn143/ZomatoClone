import { motion } from "framer-motion";

const RestaurantCard = ({ restaurant }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
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
          {restaurant.location}
        </p>
        <p className="text-sm mt-2 text-green-600">
          ⭐ {restaurant.rating || "4.0"}
        </p>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
