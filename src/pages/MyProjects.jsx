import Navbar from "../components/Navbar";

export default function MyProjects() {
  return (
    <div className="w-full h-screen bg-gray-800">

      <Navbar />


      <div className="w-full h-[calc(100vh-4rem)] flex flex-row gap-8 p-8 bg-gradient-to-b from-gray-800 to-gray-600">

        <div className="w-[40%] h-80 bg-gray-900 flex items-center justify-center rounded-2xl shadow-xl mt-32">
          <h1 className="text-4xl font-bold text-white text-center">Education</h1>
        </div>

    
        <div className="w-[60%] h-96 bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center mt-24">
          <p className="text-lg text-white text-justify leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt placeat error minima deleniti esse earum nulla 
            modi obcaecati blanditiis quos maxime, dignissimos iste labore, quibusdam facere quasi exercitationem quidem tempora?
          </p>
        </div>
      </div>
    </div>
  );
}
