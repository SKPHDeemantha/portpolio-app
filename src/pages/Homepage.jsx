import { Link, useNavigate } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // Fixed motion import
import { TypeWritter } from "typewritter";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const facebook =
  "https://www.facebook.com/heshan.deemantha.7/?viewas=100000686899395";

export default function Homepage() {
  const navigate = useNavigate();

  function move() {
    navigate("/aboutme");
  }

  return (
    <>
      <>
        <div className="w-full min-h-screen flex flex-col  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Navbar */}
          <Navbar />

          {/* Hero Section */}
          <div className="flex items-center justify-center flex-1 px-4 py-12 ">
            <div className="flex flex-col md:flex-row w-full max-w-7xl shadow-sky-800 bg-gradient-to-r from-teal-500 to-blue-600 shadow-[0_20px_10px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden transition-all">
              {/* Left: Text Content */}
              <div className="bg-gray-900 w-full md:w-[60%] flex flex-col justify-center p-10 text-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none text-center md:text-left">
                <motion.h1
                  className="text-4xl sm:text-5xl font-extrabold leading-snug"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Hi, I'm{" "}
                  <div className="text-purple-500">
                    <TypeWritter
                      text="Heshan Deemantha"
                      speed={250}
                      clearMessageSpeed={50}
                      
                    />
                  </div>
                </motion.h1>

                {/* CTA Button */}
                <button
                  onClick={move}
                  className="mt-8 relative px-10 py-4 rounded-full bg-gradient-to-tr from-red-500 via-orange-400 to-rose-400 text-white text-lg font-semibold shadow-lg group hover:scale-105 transition-all duration-300"
                >
                  <span className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 rounded-full bg-gradient-to-tr from-red-500 via-orange-400 to-rose-400 transition-opacity duration-500"></span>
                  <span className="relative z-10 flex items-center justify-center">
                    Software Engineer
                    <Link className="ml-3 group-hover:translate-x-1 transition-transform">
                      <RiArrowRightDoubleLine className="text-xl" />
                    </Link>
                  </span>
                </button>
              </div>

              {/* Right: Profile Image */}
              <div className="bg-gradient-to-r from-slate-400 to-slate-100 w-full md:w-[40%] flex items-center justify-center p-6 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
                <motion.div
                  className="w-64 h-64 sm:w-60 sm:h-60 bg-gray-200 rounded-full shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 1.5 }}
                >
                  <img
                    className="w-full h-full object-cover"
                    src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//My%20photo.jpg"
                    alt="Profile"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
