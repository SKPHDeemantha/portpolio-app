import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const experiences = [
  {
    company: "Space International Solution",
    role: "Full-Stack Developer",
    start: "2026-01",
    startLabel: "January 2026",
    current: true,
  },
  {
    company: "Raigam Marketing Service Company",
    role: "System Operator — SAP ERP",
    start: "2023-06",
    startLabel: "June 2023",
    end: "2024-09",
    endLabel: "September 2024",
    description: "Worked as a System Operator using the SAP ERP solution.",
    technologies: ["SAP ERP"],
  },
];

export default function WorkExperience() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="pointer-events-none absolute top-20 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mb-12 text-center">
        <BriefcaseBusiness className="mx-auto mb-4 h-10 w-10 text-cyan-400" aria-hidden="true" />
        <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-400">
          My professional journey and experience with enterprise systems.
        </p>
      </div>

      <ol className="relative ml-3 border-l border-cyan-400/25 space-y-8 sm:ml-6">
        {experiences.map((experience) => (
          <li key={experience.company} className="relative pl-6 sm:pl-10">
            <span className={`absolute -left-2 top-8 h-4 w-4 rounded-full border-4 border-gray-900 ${experience.current ? "bg-cyan-400" : "bg-purple-400"}`} aria-hidden="true" />
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <p className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-300">
                  <CalendarDays className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  <time dateTime={experience.start}>{experience.startLabel}</time>
                  <span>–</span>
                  {experience.current ? <span>Present</span> : <time dateTime={experience.end}>{experience.endLabel}</time>}
                </p>
                {experience.current && (
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{experience.company}</h3>
              {experience.role && <p className="mt-2 font-medium text-cyan-300">{experience.role}</p>}
              {experience.description && <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-300">{experience.description}</p>}
              {experience.technologies && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                  {experience.technologies.map((technology) => (
                    <li key={technology} className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">{technology}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          </li>
        ))}
      </ol>
    </div>
  );
}
