import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // 🔐 Rehydrate user from JWT
  useEffect(() => {
    if (token && !user) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          fullName: decoded.fullName,
          role: decoded.role,
        });
      } catch {
        logout();
      }
    }
  }, [token]);

  const login = async (credentials) => {
    const res = await authService.login(credentials);
    const { token, fullName, role } = res.data;

    localStorage.setItem("token", token);
    setToken(token);
    setUser({ fullName, role });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
