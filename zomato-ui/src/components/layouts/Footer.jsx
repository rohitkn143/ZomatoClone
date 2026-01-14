export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-xl font-bold text-white">Zomato</h3>
          <p className="mt-3 text-sm">
            Discover the best food & drinks near you.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 pb-4">
        © {new Date().getFullYear()} Zomato Clone. All rights reserved.
      </div>
    </footer>
  );
}
