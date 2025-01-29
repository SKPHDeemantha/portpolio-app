import StackIcon from "tech-stack-icons";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div className="w-full h-screen bg-gray-900">
      <Navbar />
      <div className="w-full h-[calc(100vh-4rem)] flex flex-row gap-8 p-8 bg-gradient-to-b from-gray-800 to-gray-600">
     
        <div className="w-full h-auto flex flex-wrap justify-center gap-8 flex-grow">
          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <StackIcon name="html5" className="text-6xl text-white" />
            <p className="text-white mt-2">HTML5</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <StackIcon name="css3" className="text-6xl text-white" />
            <p className="text-white mt-2">CSS3</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <StackIcon name="tailwindcss" className="text-6xl text-white" />
            <p className="text-white mt-2">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <StackIcon name="reactjs" className="text-6xl text-white" />
            <p className="text-white mt-2">ReactJS</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <StackIcon name="mysql" className="text-6xl text-white" />
            <p className="text-white mt-2">MySQL</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <StackIcon name="mongodb" className="text-6xl text-white" />
            <p className="text-white mt-2">MongoDB</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <StackIcon name="js" className="text-6xl text-white" />
            <p className="text-white mt-2">JavaScript</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <StackIcon name="java" className="text-6xl text-white" />
            <p className="text-white mt-2">Java</p>
          </div>
        </div>

        
        <div className="w-[40%] h-80 bg-gray-900 flex items-center justify-center rounded-2xl shadow-xl mt-32 p-6">
          <h1 className="text-4xl font-bold text-white text-center">Education</h1>
        </div>

        
        <div className="w-[60%] h-96 bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center mt-24">
          <p className="text-lg text-white text-justify leading-relaxed">
            I was educated at Mahinda Rajapaksha college in Physical science stream.<br/>
            I have learnt Regarding MERN Stack.<br/>
            I am studying at university of Sabaragamuwa Software Engineering.(BSC.Hons).<br/>
            This is my github account :<br/>
            <Link to="/" className="hover:underline text-sky-500">https://github.com/SKPHDeemantha</Link>
            
          </p>           
        </div>
      </div>
    </div>
  );
}
