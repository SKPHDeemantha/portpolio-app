import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-auto flex flex-row p-4 bg-gradient-to-t from-gray-800 to-gray-600 shadow-lg relative top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        

        <div className="mr-96">
          <h1 className="text-2xl font-bold text-white">HD</h1>
        </div>

       
        <div className="flex space-x-6">
          <Link
            to="/"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300 hover:shadow-xl hover:animate-pulse hover:outline"
          >
            Home
          </Link>
          <Link
            to="/aboutme"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300 hover:shadow-xl hover:animate-pulse hover:outline"
          >
            About Me
          </Link>
          <Link
            to="/skills"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300 hover:shadow-xl hover:animate-pulse hover:outline"
          >
            Skills
          </Link>
          <Link
            to="/myprojects"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300 hover:shadow-xl hover:animate-pulse hover:outline"
          >
            My Projects
          </Link>
          <Link
            to="/contact"
            className="hover:bg-gray-700 px-4 py-2 shadow-md rounded-lg text-white transition duration-300 hover:shadow-xl hover:animate-pulse hover:outline"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
