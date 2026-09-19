import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { Cloud, ShieldCheck } from "lucide-react";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="relative group w-full h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div
        className="
          relative
          h-full
          rounded-2xl
          overflow-hidden
          border border-white/10
          bg-gray-800/50
          backdrop-blur-sm
          transition-colors duration-300
          hover:border-cyan-400/50
          flex flex-col
        "
      >
        {/* ================= IMAGE ================= */}
        <div
          className="
            relative
            h-40
            sm:h-44
            md:h-48
            lg:h-52
            overflow-hidden
          "
        >
          {project.image ? <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              w-full h-full object-cover
              transition-transform duration-300
              group-hover:scale-110
            "
          /> : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900" aria-hidden="true">
              <div className="relative text-cyan-300">
                <Cloud className="w-28 h-28" strokeWidth={1} />
                <ShieldCheck className="absolute -bottom-1 -right-3 w-12 h-12 text-emerald-300 bg-blue-950 rounded-full p-1" strokeWidth={1.5} />
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70" />

          {/* Tech Stack */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="
                  px-2 py-0.5
                  text-[10px] sm:text-xs
                  rounded-full
                  bg-cyan-500/20
                  text-cyan-300
                  backdrop-blur-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col flex-1 p-4 sm:p-5">
          {(project.status === "in-progress" || project.status === "building") && (
            <span className="self-start mb-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-semibold text-amber-300">
              In Progress
            </span>
          )}
          <h3
            className="
              text-base sm:text-lg md:text-xl
              font-bold text-white
              mb-2
            "
          >
            {project.title}
          </h3>

          <p
            className="
              text-gray-400
              text-xs sm:text-sm
              mb-4
              leading-relaxed
            "
          >
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="
                  text-[10px] sm:text-xs
                  text-gray-300
                  bg-gray-700/50
                  px-2 py-1
                  rounded
                "
              >
                {feature}
              </span>
            ))}
          </div>

          {/* ================= FOOTER ================= */}
          <div className="mt-auto flex items-center justify-between">
            <div className="flex gap-2 sm:gap-3">
              {project.github && <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="
                  p-2
                  rounded-lg
                  bg-gray-700/50
                  hover:bg-gray-600/50
                  transition-colors
                "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-gray-300 text-sm sm:text-base" />
              </motion.a>}

              {project.demo && <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="
                  p-2
                  rounded-lg
                  bg-gray-700/50
                  hover:bg-gray-600/50
                  transition-colors
                "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt className="text-gray-300 text-sm sm:text-base" />
              </motion.a>}
            </div>

            <span className="text-[10px] sm:text-xs text-gray-500">
              {project.year}
            </span>
          </div>
        </div>

        {/* ================= HOVER OVERLAY ================= */}
        <motion.div
          className="
            absolute inset-0
            bg-gradient-to-br from-cyan-500/10 to-purple-500/10
            pointer-events-none
          "
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </motion.article>
  );
}
