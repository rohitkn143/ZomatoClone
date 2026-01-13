// import Navbar from "./components/layouts/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <main className="p-4">
        <AppRoutes />
      </main>
    </div>
  );
}
