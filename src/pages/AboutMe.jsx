import Navbar from "../components/Navbar";
import * as THREE from 'three';

export default function AboutMe() {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-gray-800 to-gray-600">
    
      <Navbar />

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 h-[calc(100vh-4rem)] bg-gradient-to-t from-[#2E073F] via-[#7A1CAC] via-40% via-pink-400 via-[#38f0e3]/20 via-green-300 via-rose-300/20 to-gray-600/70">
         {/* profile picture */}
        <div className="w-52 h-52 flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-dashed border-white shadow-xl"
          />
        </div>
        {/* about me */}
        <div className="flex flex-col flex-grow max-w-3xl bg-gray-900 p-8 rounded-3xl shadow-2xl text-white  bg-gray-900/90 backdrop-blur-sm  hover:shadow-[#38f0e3]/40 transition-all duration-300  items-center justify-center space-y-6  border border-white/10 hover:border-[#38f0e3]/30">
          <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-tr from-[#7A1CAC] via-pink-400 to-[#38f0e3] bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-left w-full">
            <strong className="block mb-2 bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500">Name:</strong> 
            S.K.P. Heshan Deemantha
          </p>
          <p className="text-lg leading-relaxed text-left w-full">
            <strong className="block mb-2 bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500 ">Title:</strong> 
            React Developer | Frontend Developer
          </p>
          <p className="text-lg leading-relaxed mt-4 text-justify ">
            <strong className="bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500">About Me:</strong>
            <br />
            Hello! I’m Heshan, a passionate React Developer with a love for creating interactive and user-friendly web applications. I started my journey in web development 6 months ago when I decided to turn my interest in technology into a career. I enjoy solving problems and building dynamic web experiences using modern JavaScript frameworks. I’m always eager to learn new technologies and improve my skills.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-justify">
            When I’m not coding, you can find me exploring new tech blogs, reading about UI/UX design, or hiking in nature.
          </p>
        </div>
      </div>
    </div>
  );
}
