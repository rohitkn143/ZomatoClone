import api from "../utils/axiosInstance";

export const restaurantService = {
  getAllRestaurants: async () => {
    const response = await api.get("/restaurants");
    return response.data;
  },

  getRestaurantById: async (id) => {
    const response = await api.get(`/restaurants/${id}`);
    return response.data;
  },

  createRestaurant: async (data) => {
    const response = await api.post("/restaurants", data);
    return response.data;
  },

  updateRestaurant: async (id, data) => {
    const response = await api.put(`/restaurants/${id}`, data);
    return response.data;
  },

  deleteRestaurant: async (id) => {
    const response = await api.delete(`/restaurants/${id}`);
    return response.data;
  }
};
