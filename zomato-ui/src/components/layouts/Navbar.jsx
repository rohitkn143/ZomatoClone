import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      <Link to="/" className="text-xl font-bold text-red-500">
        Zomato
      </Link>
    </nav>
  );
}