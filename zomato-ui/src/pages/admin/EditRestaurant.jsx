import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { restaurantService } from "../../services/restaurantService";

export default function EditRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    city: "",
    imageUrl: "",
    rating: "",
    deliveryTime: "",
    isOpen: true
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restaurantService.getRestaurantById(id).then(data => {
      setForm(data);
      setLoading(false);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await restaurantService.updateRestaurant(id, form);
    navigate("/restaurants");
  };

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Restaurant</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Restaurant Name"
          className="w-full border p-2 rounded"
        />

        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
          className="w-full border p-2 rounded"
        />

        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-2 rounded"
        />

        <input
          name="rating"
          value={form.rating}
          onChange={handleChange}
          placeholder="Rating"
          className="w-full border p-2 rounded"
        />

        <input
          name="deliveryTime"
          value={form.deliveryTime}
          onChange={handleChange}
          placeholder="Delivery Time"
          className="w-full border p-2 rounded"
        />

        <select
          name="isOpen"
          value={form.isOpen}
          onChange={(e) =>
            setForm({ ...form, isOpen: e.target.value === "true" })
          }
          className="w-full border p-2 rounded"
        >
          <option value="true">Open</option>
          <option value="false">Closed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Update Restaurant
        </button>
      </form>
    </div>
  );
}
