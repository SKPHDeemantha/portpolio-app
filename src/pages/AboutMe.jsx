import Navbar from "../components/Navbar";

export default function AboutMe() {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-gray-800 to-gray-600">
    
      <Navbar />

      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 h-[calc(100vh-4rem)]">
      
        <div className="w-52 h-52 flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>

        <div className="flex flex-col flex-grow max-w-3xl bg-gray-900 p-8 rounded-3xl shadow-2xl text-white">
          <h1 className="text-4xl font-bold mb-6 text-center">
            About Me
          </h1>
          <p className="text-lg leading-relaxed">
            <strong className="block mb-2">Name:</strong> 
            S.K.P. Heshan Deemantha
          </p>
          <p className="text-lg leading-relaxed">
            <strong className="block mb-2">Title:</strong> 
            React Developer | Frontend Developer
          </p>
          <p className="text-lg leading-relaxed mt-4 text-justify">
            <strong>About Me:</strong>
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
