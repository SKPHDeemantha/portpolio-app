import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const iconVariants = {
  hover: { scale: 1.12, rotate: 6 },
};

export default function SkillCard({ skill }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        relative
        w-full
        h-full
        rounded-2xl
        border border-white/10
        bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70
        backdrop-blur-xl
        p-4 sm:p-5
        flex
        focus-within:ring-2 focus-within:ring-cyan-400/40
        hover:border-cyan-400/30
        transition-colors
      "
    >
      <div className="flex flex-col items-center justify-between w-full h-full space-y-4">
        {/* Icon */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          transition={{ type: "spring", stiffness: 380, damping: 14 }}
          className="flex items-center justify-center"
        >
          <StackIcon
            name={skill.icon}
            className="
              text-cyan-400
              text-[2.5rem]
              sm:text-[2.8rem]
              md:text-[3rem]
            "
          />
        </motion.div>

        {/* Skill Name */}
        <h3
          className="
            text-center
            font-semibold
            text-sm sm:text-base
            tracking-wide
          "
        >
          {skill.name}
        </h3>

        {/* Accessibility / SEO */}
        <span className="sr-only">
          {skill.name} proficiency {skill.level} percent
        </span>

        {/* Progress Bar */}
        <div
          className="
            w-full
            bg-gray-800
            rounded-full
            h-2
            overflow-hidden
          "
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} skill level`}
        >
          <motion.div
            className="
              h-full
              rounded-full
              bg-gradient-to-r from-cyan-400 to-purple-500
            "
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          />
        </div>
      </div>
    </motion.article>
  );
}
