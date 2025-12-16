import { motion } from "framer-motion";
import { skillsData } from "./skills.data";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white"
      aria-labelledby="skills-heading"
    >
      {/* ================= HEADER ================= */}
      <header className="text-center pt-20 sm:pt-28 pb-14 sm:pb-20 px-4">
        <h1
          id="skills-heading"
          className="
            font-extrabold tracking-tight
            text-[clamp(2.2rem,5vw,4rem)]
            bg-clip-text text-transparent
            bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
          "
        >
          Technical Expertise
        </h1>

        <p
          className="
            mt-6 mx-auto
            max-w-xs sm:max-w-md md:max-w-2xl
            text-[clamp(0.95rem,2.5vw,1.1rem)]
            text-gray-300 leading-relaxed
          "
        >
          My professional skill set across frontend, backend, databases, and cloud tools.
        </p>
      </header>

      {/* ================= CONTENT ================= */}
      <div
        className="
          max-w-[90rem]
          mx-auto
          px-4 sm:px-6 lg:px-10
          space-y-16 sm:space-y-24
          pb-24 sm:pb-32
        "
      >
        {skillsData.map((category, index) => (
          <motion.section
            key={category.title}
            aria-labelledby={`category-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.12 }}
          >
            {/* Category Title */}
            <h2
              id={`category-${index}`}
              className="
                text-center font-semibold tracking-wide
                text-[clamp(1.6rem,4vw,2.2rem)]
                mb-8 sm:mb-12
                bg-clip-text text-transparent
                bg-gradient-to-r from-cyan-400 to-purple-500
              "
            >
              {category.title}
            </h2>

            {/* Skills Grid */}
            <motion.div
              className="
                grid
                grid-cols-2
                xs:grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
                gap-4 sm:gap-6
                place-items-stretch
              "
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </section>
  );
}
