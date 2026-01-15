import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";
import Restaurants from "../pages/Restaurants";
import Login from "../pages/Login";

import ProtectedRoute from "../auth/ProtectedRoutes";
import AdminRoute from "./AdminRoute";
import AddRestaurant from "../pages/admin/AddRestaurant";
import EditRestaurant from "../pages/admin/EditRestaurant";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/login" element={<Login />} />

        {/* Protected user routes */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <div>Cart Page</div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/restaurants/add"
          element={
            <AdminRoute>
              <AddRestaurant />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/restaurants/edit/:id"
          element={
            <AdminRoute>
              <EditRestaurant />
            </AdminRoute>
          }
        />

        {/* Admin only routes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <div>Admin Dashboard</div>
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
}
