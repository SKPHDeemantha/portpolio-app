import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };


  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
          backgroundSize: "200% 200%"
        }}
      />

      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl mx-auto"
        >
          {/* Header Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 flex flex-col justify-center items-start relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl group-hover:bg-purple-400/40 transition-colors duration-500" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent relative z-10">
              About Me
            </h1>
            <p className="text-purple-200/70 mt-2 relative z-10 text-sm sm:text-base">
              Discover my journey and expertise.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-pink-500/50 transition-all duration-500 group flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-pink-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 relative z-10">Identity</span>
            <h2 className="text-2xl sm:text-3xl text-white font-medium mb-1 relative z-10 group-hover:text-pink-300 transition-colors">S.K.P. Heshan Deemantha</h2>
            <p className="text-gray-400 text-sm sm:text-base relative z-10">Fullstack Developer | Cloud Engineering Enthusiast</p>
          </motion.div>

          {/* About Text Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 md:row-span-2 p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-center space-y-4 relative overflow-hidden group"
          >
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-500" />
            
            <span className="text-cyan-400 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Background
            </span>

            <div className="space-y-4 relative z-10">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                Hello! I'm Heshan, a passionate{" "}
                <span className="font-semibold text-pink-400">Fullstack Developer</span>{" "}
                with expertise in building scalable and interactive applications. I started with frontend development using React,
                and expanded into backend technologies, APIs, and database management.
                I also explore{" "}
                <span className="font-semibold text-cyan-400">cloud engineering</span>{" "}
                to design, deploy, and manage modern applications effectively.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-justify">
                I specialize in{" "}
                <span className="font-semibold text-purple-300">React.js, Next.js, Node.js, MySQL</span>,
                and enjoy working across the full software lifecycle.
                With cloud technologies, I'm comfortable leveraging
                <span className="font-semibold text-green-300"> AWS</span>,
                <span className="font-semibold text-blue-400"> Azure</span>, and
                <span className="font-semibold text-cyan-400"> Supabase</span>{" "}
                for hosting, scaling, and delivering seamless experiences.
              </p>
            </div>
          </motion.div>

          {/* Stats Cards */}
          {[
            { value: "2+", label: "Years Coding", icon: "💻", color: "from-purple-500 to-indigo-500" },
            { value: "10+", label: "Projects Built", icon: "🚀", color: "from-pink-500 to-rose-500" },
            { value: "6+", label: "Certifications", icon: "🏆", color: "from-amber-500 to-orange-500" },
            { value: "3+", label: "Cloud Platforms", icon: "☁️", color: "from-cyan-500 to-blue-500" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="col-span-1 flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden group min-h-[160px]"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${stat.color} transition-opacity duration-500`} />
              <span className="text-3xl sm:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300 inline-block">{stat.icon}</span>
              <p className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}