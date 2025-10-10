import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";
import { Link } from "react-router-dom";

export default function Skills() {
  const [loadingStatus, setLoadingStatus] = useState("loading");

  useEffect(() => {
    const timer = setTimeout(() => setLoadingStatus("loaded"), 1000);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "html5", level: 95 },
        { name: "CSS3", icon: "css3", level: 90 },
        { name: "JavaScript", icon: "js", level: 88 },
        { name: "ReactJS", icon: "reactjs", level: 92 },
        { name: "Next.js", icon: "nextjs", level: 85 },
        { name: "Tailwind CSS", icon: "tailwindcss", level: 93 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "nodejs", level: 90 },
        { name: "Express.js", icon: "express", level: 85 },
        { name: "Java", icon: "java", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "mysql", level: 88 },
        { name: "MongoDB", icon: "mongodb", level: 84 },
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", icon: "aws", level: 75 },
        { name: "Postman", icon: "postman", level: 85 },
        { name: "GitHub", icon: "github", level: 90 },
      ],
    },
  ];

  if (loadingStatus === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
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
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden">
      {/* Background subtle glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.15),_transparent_70%)] blur-3xl" />

      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-lg mb-4">
            Technical Expertise
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Crafting seamless digital experiences through elegant frontends, powerful backends, and efficient databases.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="space-y-20 w-full max-w-7xl">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="w-full"
            >
              <h2 className="text-3xl font-semibold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                {category.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                      boxShadow: "0px 0px 30px rgba(56,189,248,0.25)",
                    }}
                    className="relative bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 border border-white/10 backdrop-blur-xl p-6 rounded-2xl hover:border-cyan-400/40 transition-all duration-300 w-full max-w-[220px]"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <StackIcon
                        name={skill.icon}
                        className="text-6xl"
                        style={{ color: "#00FFFF" }}
                      />
                      <p className="text-lg font-semibold">{skill.name}</p>

                      {/* Animated Progress Bar */}
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-5xl mt-24 mb-16 px-6"
        >
          <div className="relative bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 p-10 rounded-3xl border border-white/10 backdrop-blur-lg hover:border-cyan-400/30 transition-all shadow-2xl">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-600/10 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">
                Academic Journey
              </h2>

              <div className="space-y-8">
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
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium hover:scale-105 transition-transform shadow-lg"
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
