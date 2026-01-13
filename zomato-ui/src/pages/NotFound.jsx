import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-gray-600 mt-2">Page not found</p>

      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
