import Navbar from "../components/Navbar";

export default function AboutMe() {
  return (
    <div className="w-full h-screen bg-slate-600">
      <Navbar />
      <div className="w-full bg-red-600 h-[calc(100vh-4rem)] flex flex-row gap-6 p-6">
       
        <div className="w-52 h-52 flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
        </div>

     
        <div className="flex flex-col flex-grow md:w-96 h-auto items-center justify-center bg-slate-500 p-6 shadow-lg rounded-xl text-white">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-justify">
            <strong>Name:</strong> S.K.P. Heshan Deemantha
            <br />
            <strong>Title:</strong> React Developer | Frontend Developer
            <br />
            <strong>About Me:</strong>
            <br />
            Hello! I’m John, a passionate React Developer with a love for creating interactive and user-friendly web applications. I started my journey in web development 6 months ago when I decided to turn my interest in technology into a career. I enjoy solving problems and building dynamic web experiences using modern JavaScript frameworks. I’m always eager to learn new technologies and improve my skills.
            <br />
            When I’m not coding, you can find me exploring new tech blogs, reading about UI/UX design, or hiking in nature.
          </p>
        </div>
      </div>
    </div>
  );
}
