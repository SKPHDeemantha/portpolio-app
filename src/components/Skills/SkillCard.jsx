import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";


export default function SkillCard({ skill }) {
return (
<motion.article
whileHover={{ scale: 1.05 }}
transition={{ type: "spring", stiffness: 280 }}
className="bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 border border-white/10 backdrop-blur-xl p-6 rounded-2xl w-full max-w-[220px]"
>
<div className="flex flex-col items-center space-y-4">
<StackIcon name={skill.icon} className="text-6xl text-cyan-400" />
<h3 className="text-lg font-semibold">{skill.name}</h3>


{/* SEO + Accessibility */}
<span className="sr-only">
{skill.name} proficiency {skill.level} percent
</span>


<div
className="w-full bg-gray-800 rounded-full h-2 overflow-hidden"
role="progressbar"
aria-valuenow={skill.level}
aria-valuemin="0"
aria-valuemax="100"
aria-label={`${skill.name} skill level`}
>
<motion.div
className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
initial={{ width: 0 }}
whileInView={{ width: `${skill.level}%` }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
/>
</div>
</div>
</motion.article>
);
}


// ------------------------------------------------------------