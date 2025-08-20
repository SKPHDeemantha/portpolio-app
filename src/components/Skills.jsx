import { useState, useEffect } from "react";
import { motion, stagger } from "framer-motion";
import StackIcon from "tech-stack-icons";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Skills() {
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    setTimeout(() => setLoadingStatus("loaded"), 800);
  }, []);

  const skills = [
    { name: "HTML5", icon: "html5", color: "#E34F26" },
    { name: "CSS3", icon: "css3", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
    { name: "ReactJS", icon: "reactjs", color: "#61DAFB" },
    { name: "MySQL", icon: "mysql", color: "#4479A1" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { name: "Java", icon: "java", color: "#007396" },
  ];

  if (loadingStatus === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
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
    <div className="w-full min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />

      <div className="w-full flex flex-col items-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 mt-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Technical Expertise
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            Technologies I've mastered and continuously work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-1 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-xl hover:shadow-2xl transition-shadow"
              style={{
                boxShadow: `0 4px 24px -2px ${skill.color}40`,
              }}
            >
              <div className="flex flex-col items-center justify-center bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl space-y-4 border border-white/5 hover:border-white/10 transition-all">
                <StackIcon
                  name={skill.icon}
                  className="text-6xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <p className="text-xl font-medium text-gray-100">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl mt-20 mb-12 px-4"
        >
          <div className="relative bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all shadow-2xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-lg" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              Academic Journey
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-cyan-500/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
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
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
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

              <div className="mt-8 flex items-center space-x-3">
                <Link
                  to="https://github.com/SKPHDeemantha"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:scale-[1.02] transition-transform hover:cursor-auto"
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
