import { motion } from "framer-motion";
import { skillsData } from "./skills.data";
import SkillCard from "./SkillCard";


export default function Skills() {
return (
<section
className="relative w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white"
aria-labelledby="skills-heading"
>
<header className="text-center py-20">
          <h1
            id="skills-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
          >
            Technical Expertise
          </h1>
<p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
My professional skill set across frontend, backend, databases, and cloud tools.
</p>
</header>


<div className="space-y-24 max-w-7xl mx-auto px-6 pb-24">
{skillsData.map((category, index) => (
<motion.section
key={category.title}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.7, delay: index * 0.15 }}
aria-labelledby={`category-${index}`}
>
<h2
id={`category-${index}`}
className="text-3xl font-semibold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
>
{category.title}
</h2>


<motion.div
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center"
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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