import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Skills() {
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    setTimeout(() => setLoadingStatus("loaded"), 800);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "html5", color: "#E34F26" },
        { name: "CSS3", icon: "css3", color: "#1572B6" },
        { name: "JavaScript", icon: "js", color: "#F7DF1E" },
        { name: "ReactJS", icon: "reactjs", color: "#61DAFB" },
        { name: "Next.js", icon: "nextjs", color: "#000000" },
        { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "nodejs", color: "#3C873A" },
        { name: "Express.js", icon: "express", color: "#FFFFFF" },
        { name: "Java", icon: "java", color: "#007396" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "mysql", color: "#4479A1" },
        { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", icon: "aws", color: "#FF9900" },
        { name: "Postman", icon: "postman", color: "#FF6C37" },
        { name: "GitHub", icon: "github", color: "#ffffff" },
      ],
    },
  ];

  if (loadingStatus === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-950">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="relative h-20 w-20 rounded-full border-4 border-gray-800"
        >
          <div className="absolute inset-0 rounded-full border-4 border-t-cyan-500 border-r-purple-500 border-b-pink-500 border-l-emerald-500 blur-[12px]" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-x-hidden">
      <Navbar />

      <div className="w-full flex flex-col items-center p-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
            Technical Expertise
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            A versatile Fullstack + Cloud Engineer skilled in crafting modern, scalable, and secure applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-16 w-full max-w-7xl">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIndex * 0.3 }}
              className="w-full"
            >
              <h2 className="text-3xl font-semibold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-[2px] rounded-2xl bg-gradient-to-br from-cyan-500/40 via-purple-500/40 to-pink-500/40 shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    <div className="flex flex-col items-center justify-center bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl space-y-4 border border-white/10 group-hover:border-cyan-400/40 transition-all">
                      <StackIcon
                        name={skill.icon}
                        className="text-6xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <p className="text-lg font-medium text-gray-200">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-full max-w-5xl mt-24 mb-16 px-6"
        >
          <div className="relative bg-gray-900/60 backdrop-blur-lg p-10 rounded-3xl border border-white/10 hover:border-cyan-400/30 transition-all shadow-2xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-lg" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-8 relative">
              Academic Journey
            </h2>
            <div className="space-y-8 relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-cyan-500/10 rounded-lg">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    BSc. Software Engineering
                  </h3>
                  <p className="text-gray-300">
                    University of Sabaragamuwa
                    <br />
                    2022 - Present
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg">
                  📘
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    Advanced Level Education
                  </h3>
                  <p className="text-gray-300">
                    Mahinda Rajapaksha College
                    <br />
                    Physical Science Stream - 2021
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <Link
                  to="https://github.com/SKPHDeemantha"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:scale-[1.05] transition-transform"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.237-.009-.866-.014-1.7-2.782.602-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.295 2.747-1.026 2.747-1.026.547 1.376.202 2.394.1 2.646.64.698 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.307.678.915.678 1.846 0 1.335-.012 2.415-.012 2.741 0 .269.18.579.688.481A9.997 9.997 0 0022 12c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Visit GitHub
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
