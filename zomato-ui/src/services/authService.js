// import api from "../utils/axiosInstance";

// export const authService = {
//   login: async (credentials) => {
//     const response = await api.post("/auth/login", credentials);
//     return response.data;
//   },

//   register: async (data) => {
//     const response = await api.post("/auth/register", data);
//     return response.data;
//   }
// };


import api from "../utils/axiosInstance";

const login = (data) => api.post("/auth/login", data);
const register = (data) => api.post("/auth/register", data);

export default {
  login,
  register,
};

