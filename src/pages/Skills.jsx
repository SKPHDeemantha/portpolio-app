import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Skills() {
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    setTimeout(() => setLoadingStatus("loaded"), 500); 
  }, []);

  if (loadingStatus === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-16 w-16 border-4 border-gray-300 border-t-blue-500"
        ></motion.div>
      </div>
    );
  }

  const skills = [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "ReactJS", icon: "reactjs" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "JavaScript", icon: "js" },
    { name: "Java", icon: "java" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900">
      <Navbar />
      <div className="w-full flex flex-col items-center p-8 bg-gradient-to-t from-gray-800 to-gray-600">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-8"
        >
          My Skills
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg  bg-gray-900/90 backdrop-blur-sm  hover:shadow-[#38f0e3]/40 transition-all duration-300 space-y-6  border border-white/10 hover:border-[#38f0e3]/30"
            >
              <StackIcon name={skill.icon} className="text-6xl text-white" />
              <p className="text-white mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-[80%] bg-gray-900 p-8 rounded-2xl shadow-xl mt-16"
        >
          <div className="items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-4">Education</h1>
          <p className="text-lg text-white leading-relaxed">
            I was educated at Mahinda Rajapaksha College in the Physical Science stream.<br />
            I have learned about the MERN Stack.<br />
            I am currently studying Software Engineering (BSc. Hons) at the University of Sabaragamuwa.<br />
            This is my GitHub account:
            <Link to="/" className="hover:underline text-sky-500"> https://github.com/SKPHDeemantha</Link>
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
