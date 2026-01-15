import { useState } from "react";

export default function AddRestaurant() {
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
    rating: "",
    deliveryTime: "",
    isOpen: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Restaurant payload:", form);
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Add Restaurant</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <input
          name="name"
          placeholder="Restaurant Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <input
          name="imageUrl"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <input
          name="rating"
          placeholder="Rating (4.5)"
          type="number"
          step="0.1"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <input
          name="deliveryTime"
          placeholder="Delivery Time (30-40 mins)"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isOpen"
            checked={form.isOpen}
            onChange={handleChange}
          />
          <span>Restaurant is open</span>
        </label>

        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          Add Restaurant
        </button>
      </form>
    </div>
  );
}
