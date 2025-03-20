import { Link, useNavigate } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion"; // Fixed motion import
import { TypeWritter } from "typewritter";

export default function Homepage() {
  const navigate = useNavigate();

  function move() {
    navigate("/aboutme");
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-t from-gray-300 to-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex items-center justify-center h-full w-full px-4">
        <div className="flex flex-col md:flex-row w-full md:w-[85%] h-auto md:h-[90vh] bg-gradient-to-r from-teal-500 to-blue-600 shadow-2xl rounded-3xl overflow-hidden p-6 md:p-0">
          {/* Left Section (Text & Button) */}
          <div className="p-8 bg-gray-900 w-full md:w-[60%] flex flex-col justify-center text-center md:text-left rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl">
            <motion.h1
              className="text-3xl sm:text-4xl font-extrabold text-white leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Hi, I'm
              <div className="text-blue-500">
                <TypeWritter
                  text="Heshan Deemantha"
                  speed={250}
                  clearMessageSpeed={50}
                />
              </div>
            </motion.h1>

            {/* Button */}
            <button
              className="mt-6 bg-gradient-to-t from-red-500 via-orange-400 to-rose-400 text-white px-6 py-3 rounded-full hover:bg-orange-400 transition duration-300 flex items-center justify-center text-lg hover:animate-pulse mx-auto md:mx-0"
              onClick={move}
            >
              Software Engineer
              <Link className="ml-3 flex items-center">
                <RiArrowRightDoubleLine />
              </Link>
            </button>
          </div>

          {/* Right Section (Profile Image) */}
          <div className="flex w-full md:w-[40%] items-center justify-center bg-gradient-to-r from-slate-400 to-slate-100 rounded-b-3xl md:rounded-tr-3xl md:rounded-br-3xl p-4">
            <motion.div
              className="w-40 h-40 sm:w-56 sm:h-56 bg-gray-200 rounded-full shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <img
                className="w-full h-full object-cover"
                src="/profile.jpg"
                alt="Profile"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/*second slide*/}
      <div className="w-full h-screen bg-gradient-to-t from-gray-800 via-gray-600 to-slate-100 mt-2">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 h-[calc(100vh-4rem)]">
          <div className="w-52 h-52 flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>

          <div className="flex flex-col flex-grow max-w-3xl bg-gray-900 p-8 rounded-3xl shadow-2xl text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
            <p className="text-lg leading-relaxed">
              <strong className="block mb-2">Name:</strong>
              S.K.P. Heshan Deemantha
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="block mb-2">Title:</strong>
              React Developer | Frontend Developer
            </p>
            <p className="text-lg leading-relaxed mt-4 text-justify">
              <strong>About Me:</strong>
              <br />
              Hello! I’m Heshan, a passionate React Developer with a love for
              creating interactive and user-friendly web applications. I started
              my journey in web development 6 months ago when I decided to turn
              my interest in technology into a career. I enjoy solving problems
              and building dynamic web experiences using modern JavaScript
              frameworks. I’m always eager to learn new technologies and improve
              my skills.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-justify">
              When I’m not coding, you can find me exploring new tech blogs,
              reading about UI/UX design, or hiking in nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
