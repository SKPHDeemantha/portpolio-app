import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-gray-900 to-gray-700">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 h-[calc(100vh-4rem)] bg-gradient-to-t from-[#2E073F] via-[#7A1CAC] via-pink-400/50 via-[#38f0e3]/20 via-green-300/30 to-gray-700/70">
        
        {/* profile picture */}
        <div className="w-52 h-52 flex-shrink-0">
          <img
            src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//My%20photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-dashed border-white shadow-2xl"
          />
        </div>

        {/* about me section */}
        <motion.div
          className="flex flex-col flex-grow max-w-3xl bg-gray-900 p-8 rounded-3xl shadow-2xl text-white bg-gray-900/90 backdrop-blur-sm hover:shadow-[#38f0e3]/40 transition-all duration-300 items-center justify-center space-y-6 border border-white/10 hover:border-[#38f0e3]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-6 text-center bg-gradient-to-tr from-[#7A1CAC] via-pink-400 to-[#38f0e3] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            About Me
          </motion.h1>

          {/* Name */}
          <p className="text-lg leading-relaxed text-left w-full">
            <strong className="block mb-2 bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500">
              Name:
            </strong>
            S.K.P. Heshan Deemantha
          </p>

          {/* Title */}
          <p className="text-lg leading-relaxed text-left w-full">
            <strong className="block mb-2 bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500">
              Title:
            </strong>
            Fullstack Developer | Cloud Engineering Enthusiast
          </p>

          {/* About Me */}
          <p className="text-lg leading-relaxed mt-4 text-justify">
            <strong className="bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500">
              About Me:
            </strong>
            <br />
            Hello! I’m Heshan, a passionate <span className="font-semibold text-pink-400">Fullstack Developer</span> 
            with expertise in building scalable and interactive applications. My journey began with 
            frontend development using React, but quickly expanded into backend technologies, APIs, 
            and database management. I also explore <span className="font-semibold text-[#38f0e3]">cloud engineering</span> 
            to design, deploy, and manage modern applications effectively.  
          </p>

          {/* Skills highlight */}
          <p className="text-lg leading-relaxed mt-4 text-justify">
            I specialize in <span className="font-semibold">React.js, Next.js, Node.js, MySQL</span>, 
            and enjoy working across the full software lifecycle—from concept to deployment. 
            With cloud technologies, I’m comfortable leveraging <span className="font-semibold text-green-300">AWS</span>, 
            <span className="font-semibold text-green-400"> Azure</span>, or 
            <span className="font-semibold text-[#38f0e3]"> Supabase</span> for hosting, scaling, and 
            delivering seamless experiences.  
          </p>

          {/* Personal side */}
          <p className="text-lg leading-relaxed mt-4 text-justify">
            Beyond coding, I enjoy exploring new tech trends, reading about UI/UX design, 
            and learning modern cloud-native solutions. When I’m offline, you’ll probably 
            find me hiking in nature or diving into a new book.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
