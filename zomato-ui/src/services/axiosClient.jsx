import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost:7036/api", // 🔴 change port if needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT automatically
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
