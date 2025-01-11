import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-auto flex flex-row p-4 bg-gradient-to-r from-gray-800 to-gray-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="mr-96">
          <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/aboutme"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300"
          >
            About Me
          </Link>
          <Link
            to="/skills"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="/myprojects"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300"
          >
            My Projects
          </Link>
          <Link
            to="/contact"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
