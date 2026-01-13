import { motion } from "framer-motion";
import heroImg from "../assets/images/hero-food.gif"; // use any food image

export default function Home() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-pink-600 to-orange-500 overflow-hidden">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            Discover the best food <br /> & drinks near you
          </h1>

          <p className="mt-6 text-lg text-white/90">
            Order from top restaurants, cafés, and bars around you.
          </p>

          {/* Search */}
          <div className="mt-8 backdrop-blur-xl bg-white/20 rounded-xl p-4 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search for restaurant or food"
              className="flex-1 px-4 py-3 rounded-lg outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-semibold">
              Search
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <img
            src={heroImg}
            alt="Food"
            className="w-full rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
