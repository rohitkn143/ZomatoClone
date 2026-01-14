// import { Navigate } from "react-router-dom"

// const ProtectedRoute = ({ children, role }) => {
//   const token = localStorage.getItem("token")
//   const userRole = localStorage.getItem("role")

//   if (!token) return <Navigate to="/login" />

//   if (role && userRole !== role) return <Navigate to="/unauthorized" />

//   return children
// }

// export default ProtectedRoute






import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}
