import { Link, useNavigate } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Navbar from "../components/Navbar";
import AboutMe from "./AboutMe";
import { Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { TypeWritter } from "typewritter";

export default function Homepage() {
  const navigate = useNavigate();
 
  function move(){
    navigate("/aboutme");
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-l from-gray-300 to-gray-100">
  
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex items-center justify-center h-[calc(100vh-100px)] w-full">
        <div className="flex flex-row w-[85%] h-[90vh] bg-gradient-to-r from-teal-500 to-blue-600 shadow-2xl rounded-3xl overflow-hidden">
       
      

          <div className="p-12 bg-gray-900 w-[60%] flex flex-col justify-center text-center rounded-tl-3xl rounded-bl-3xl">
            <p className="text-4xl text-white font-bold leading-relaxed">
              {/* <span className="text-lg block mb-2">Hello Everyone</span> */}
               <motion.h1
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span > Hi, I'm</span>
          <div className="text-blue-500"><TypeWritter text="Heshan Deemantha " speed={250} clearMessageSpeed={50}></TypeWritter></div>
          
           
        </motion.h1>

            </p>
            <button className="mt-10 bg-orange-500 text-white px-6 py-3 rounded-full
             hover:bg-orange-400 transition duration-300 flex items-center justify-center text-lg hover:animate-pulse
             " onClick={move}>
              Software Engineer
              <Link className="ml-3 flex items-center">
                <RiArrowRightDoubleLine />
              </Link>
            </button>
          </div>

       
          <div className="flex w-[40%] items-center justify-center bg-gradient-to-r from-slate-400 to-slate-100 rounded-tr-3xl rounded-br-3xl">
            <div className="w-56 h-56 bg-gray-200 rounded-full shadow-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/profile.jpg"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
