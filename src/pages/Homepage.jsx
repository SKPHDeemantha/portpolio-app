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
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-t from-gray-300 to-gray-100">
          {/* Navbar */}
          
          <Navbar />

          {/* Main Content */}
          <div className="flex items-center justify-center h-full w-full px-4 ">
            <div className="flex flex-col md:flex-row w-full md:w-[85%] h-auto md:h-[90vh] bg-gradient-to-r from-teal-500 to-blue-600 shadow-2xl rounded-3xl overflow-hidden p-6 md:p-0">
              {/* Left Section (Text & Button) */}
              <div className="p-8 bg-gray-900 w-full md:w-[60%] flex flex-col justify-center text-center md:text-left rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl">
                <motion.h1
                  className="text-3xl sm:text-4xl font-extrabold text-white leading-relaxed"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Hi, I'm
                  <div className="text-purple-500">
                    <TypeWritter
                      text="Heshan Deemantha"
                      speed={250}
                      clearMessageSpeed={50}
                    />
                  </div>
                </motion.h1>

                {/* Button */}
                <button
      onClick={move}
      className="mt-6 relative bg-gradient-to-tr from-red-500 via-orange-400 to-rose-400 text-white px-8 py-3 rounded-full 
                 transition-all duration-300 flex items-center justify-center text-lg font-semibold mx-auto md:mx-0 
                 hover:scale-105 hover:shadow-lg hover:shadow-rose-400/40 group overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-tr from-red-500 via-orange-400 to-rose-400 blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-full"></span>
      
      <span className="relative z-10 flex items-center">
        Software Engineer
        <Link className="ml-3 flex items-center transition-transform duration-300 group-hover:translate-x-1">
          <RiArrowRightDoubleLine className="text-xl" />
        </Link>
      </span>
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
          {/* second slide */}
          {/* <div className="w-full h-screen bg-gradient-to-t from-gray-800 via-gray-600 to-slate-100 mt-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 h-[calc(100vh-4rem)]">
              <div className="w-52 h-52 flex-shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>

              <div className="flex flex-col flex-grow max-w-3xl bg-gray-900 p-8 rounded-3xl shadow-2xl text-white">
                <h1 className="text-4xl font-bold mb-6 text-center">
                  About Me
                </h1>
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
                  Hello! I’m Heshan, a passionate React Developer with a love
                  for creating interactive and user-friendly web applications. I
                  started my journey in web development 6 months ago when I
                  decided to turn my interest in technology into a career. I
                  enjoy solving problems and building dynamic web experiences
                  using modern JavaScript frameworks. I’m always eager to learn
                  new technologies and improve my skills.
                </p>
                <p className="text-lg leading-relaxed mt-4 text-justify">
                  When I’m not coding, you can find me exploring new tech blogs,
                  reading about UI/UX design, or hiking in nature.
                </p>
              </div>
            </div>
          </div> */}
        </div>

        {/*education*/}
        {/* <div className="w-full h-screen bg-gray-800 ">
          <div className="w-full h-[calc(100vh-4rem)] flex flex-row gap-8 p-8 bg-gradient-to-b from-gray-800 to-gray-600">
            <div className="w-[40%] h-80 bg-gray-900 flex items-center justify-center rounded-2xl shadow-xl mt-32">
              <h1 className="text-4xl font-bold text-white text-center">
                Education
              </h1>
            </div>

            <div className="w-[60%] h-96 bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center mt-24">
              <p className="text-lg text-white text-justify leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt placeat error minima deleniti esse earum nulla modi
                obcaecati blanditiis quos maxime, dignissimos iste labore,
                quibusdam facere quasi exercitationem quidem tempora? Heshan
                Deemantha
              </p>
            </div>
          </div>
        </div> */}
      </>

      {/*contact*/}
      {/* <div className="w-full h-screen ">
    
        <div className="flex flex-col lg:flex-row bg-gradient-to-t from-gray-800 via-gray-700 to-gray-500 shadow-lg w-full h-[calc(100vh-4rem)] items-center justify-center p-10">
          <div className="w-full lg:w-[45%] h-[500px] p-5 flex justify-center items-center rounded-2xl shadow-lg">
            <img
              src="/contact.jpg"
              alt="Contact"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full lg:w-[45%] h-[500px] p-6 shadow-xl flex flex-col justify-center items-center space-y-6 rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800">
            <h2 className="text-3xl font-semibold text-white">Get in Touch</h2>
            <p className="text-white text-lg text-center mb-6">
              Feel free to reach out to me via any of these platforms:
            </p>

            <div className="flex flex-col space-y-4 w-full">
              <Link className="flex items-center p-4 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition duration-300">
                <SiWhatsapp className="mr-3 text-2xl" />
                0776171219
              </Link>
              <Link className="flex items-center p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
                <FaFacebookMessenger className="mr-3 text-2xl" />
                facebook
              </Link>
              <Link className="flex items-center p-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition duration-300">
                <IoIosMailUnread className="mr-3 text-2xl" />
                heshandeemantha99@gmail.com
              </Link>
            </div>

            <div className="flex flex-grow items-center justify-center space-x-4 mt-6">
              <Link to="/" className="w-52">
                <button className="px-2 py-2 bg-gray-500 text-white w-full rounded-2xl hover:bg-gray-600 transition duration-300 flex items-center justify-center space-x-2">
                  <MdKeyboardDoubleArrowLeft className="text-2xl" />
                  <span className="text-lg">Back to Home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
