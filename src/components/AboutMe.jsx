import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-t from-gray-900 to-gray-700">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-6 sm:p-8 md:p-10 bg-gradient-to-t from-[#2E073F] via-[#7A1CAC] via-pink-400/50 via-[#38f0e3]/20 via-green-300/30 to-gray-700/70 rounded-3xl shadow-xl">
          
          {/* profile picture */}
          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//My%20photo.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-dashed border-white shadow-2xl"
            />
          </motion.div>

          {/* about me section */}
          <motion.div
            className="flex flex-col flex-grow max-w-4xl w-full bg-gray-900/90 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl text-white backdrop-blur-sm hover:shadow-[#38f0e3]/40 transition-all duration-300 space-y-5 border border-white/10 hover:border-[#38f0e3]/30"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-tr from-[#7A1CAC] via-pink-400 to-[#38f0e3] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              About Me
            </motion.h1>

            {/* Name */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <strong className="block mb-1 bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500">
                Name:
              </strong>
              S.K.P. Heshan Deemantha
            </motion.p>

            {/* Title */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <strong className="block mb-1 bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500">
                Title:
              </strong>
              Fullstack Developer | Cloud Engineering Enthusiast
            </motion.p>

            {/* About Me */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <strong className="bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500">
                About Me:
              </strong>
              <br />
              Hello! I'm Heshan, a passionate <span className="font-semibold text-pink-400">Fullstack Developer</span> 
              with expertise in building scalable and interactive applications. I started with frontend development using React, 
              and expanded into backend technologies, APIs, and database management. 
              I also explore <span className="font-semibold text-[#38f0e3]">cloud engineering</span> 
              to design, deploy, and manage modern applications effectively.
            </motion.p>

            {/* Skills highlight */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I specialize in <span className="font-semibold">React.js, Next.js, Node.js, MySQL</span>, 
              and enjoy working across the full software lifecycle. 
              With cloud technologies, I'm comfortable leveraging 
              <span className="font-semibold text-green-300"> AWS</span>, 
              <span className="font-semibold text-green-400"> Azure</span>, and 
              <span className="font-semibold text-[#38f0e3]"> Supabase</span> 
              for hosting, scaling, and delivering seamless experiences.
            </motion.p>

            {/* Personal side */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl leading-relaxed text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Beyond coding, I enjoy exploring new tech trends, reading about UI/UX design, 
              and learning modern cloud-native solutions. When offline, you'll find me hiking 
              or diving into a good book.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
