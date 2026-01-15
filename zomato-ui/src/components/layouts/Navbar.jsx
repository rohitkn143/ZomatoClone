import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../auth/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-red-500">
          Zomato
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              `hover:text-red-500 ${isActive ? "text-red-500 font-semibold" : ""}`
            }>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/restaurants" className={({ isActive }) =>
              `hover:text-red-500 ${isActive ? "text-red-500 font-semibold" : ""}`
            }>
              Restaurants
            </NavLink>
          </li>

          <li>
            <NavLink to="/offers">Offers</NavLink>
          </li>

          <li className="relative">
            <NavLink to="/cart">Cart</NavLink>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </li>

          {/* ✅ Admin-only */}
          {user?.role === "Admin" && (
            <li>
              <NavLink
                to="/admin/restaurants/add"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black"
              >
                Add Restaurant
              </NavLink>
            </li>
          )}

          {/* Auth */}
          <li>
            {user ? (
              <button
                onClick={logout}
                className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col p-4 space-y-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/restaurants">Restaurants</NavLink>
              <NavLink to="/offers">Offers</NavLink>
              <NavLink to="/cart">Cart</NavLink>

              {user?.role === "Admin" && (
                <NavLink to="/admin/restaurants/add" className="text-red-500">
                  Add Restaurant
                </NavLink>
              )}

              {user ? (
                <button onClick={logout} className="text-red-500 font-semibold">
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="text-red-500 font-semibold">
                  Login
                </NavLink>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
