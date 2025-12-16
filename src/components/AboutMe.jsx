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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
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
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-gray-900/95 via-purple-900/30 to-gray-800/95 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10 relative overflow-hidden"
        >
          {/* Decorative gradient orbs */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
          
          {/* Profile Picture Section */}
          <motion.div
            variants={imageVariants}
            className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex-shrink-0"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative w-full h-full"
            >
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400"
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ padding: "4px" }}
              >
                <div className="w-full h-full rounded-full bg-gray-900" />
              </motion.div>
              
              {/* Profile Image */}
              <motion.img
                src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//My%20photo.jpg"
                alt="S.K.P. Heshan Deemantha Profile"
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] object-cover rounded-full shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/30 via-pink-500/30 to-cyan-400/30 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col flex-grow max-w-4xl w-full space-y-6 relative z-10"
          >
            {/* Heading with gradient animation */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center lg:text-left bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About Me
            </motion.h1>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Name Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <motion.span
                  className="block text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Name
                </motion.span>
                <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium">
                  S.K.P. Heshan Deemantha
                </p>
              </motion.div>

              {/* Title Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-all duration-300"
              >
                <motion.span
                  className="block text-sm sm:text-base font-semibold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Title
                </motion.span>
                <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium">
                  Fullstack Developer | Cloud Engineering Enthusiast
                </p>
              </motion.div>

              {/* About Description */}
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300 space-y-4"
              >
                <motion.span
                  className="block text-sm sm:text-base font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  About Me
                </motion.span>
                
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Hello! I'm Heshan, a passionate{" "}
                  <span className="font-semibold text-pink-400">Fullstack Developer</span>{" "}
                  with expertise in building scalable and interactive applications. I started with frontend development using React, 
                  and expanded into backend technologies, APIs, and database management. 
                  I also explore{" "}
                  <span className="font-semibold text-cyan-400">cloud engineering</span>{" "}
                  to design, deploy, and manage modern applications effectively.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  I specialize in{" "}
                  <span className="font-semibold text-purple-300">React.js, Next.js, Node.js, MySQL</span>, 
                  and enjoy working across the full software lifecycle. 
                  With cloud technologies, I'm comfortable leveraging
                  <span className="font-semibold text-green-300"> AWS</span>,
                  <span className="font-semibold text-blue-400"> Azure</span>, and
                  <span className="font-semibold text-cyan-400"> Supabase</span>{" "}
                  for hosting, scaling, and delivering seamless experiences.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Beyond coding, I enjoy exploring new tech trends, reading about UI/UX design, 
                  and learning modern cloud-native solutions. When offline, you'll find me hiking 
                  or diving into a good book.
                </p>
              </motion.div>
            </div>

            {/* Decorative Tech Stack Pills */}
            {/* <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start pt-4"
            >
              {["React", "Next.js", "Node.js", "AWS", "Azure", "MySQL"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-200 backdrop-blur-sm hover:border-purple-400/50 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}