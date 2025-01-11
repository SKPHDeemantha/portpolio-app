import { Link } from "react-router-dom";

export default function Navbar(){
   return(
   
       <nav className="w-full h-auto flex flex-row p-4 bg-red-300" >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="mr-96">
              <h1>Myportpolio</h1>
            </div> 
             <div className="flex space-x-6">
             <Link to="/" className="hover:bg-red-400 px-4 py-2 shadow-lg rounded-lg">Home</Link>
             <Link to="/aboutme" className="hover:bg-red-400 px-4 py-2 w-auto shadow-lg  rounded-lg">About Me</Link>
             <Link to="/skills" className="hover:bg-red-400 px-4 py-2 w-auto   shadow-lg rounded-lg" rounded-lg>Skills</Link>
             <Link to="/myprojects" className="hover:bg-red-400 px-4 py-2 w-auto  shadow-lg rounded-lg">My Projects</Link>
             <Link to="/contact" className="hover:bg-red-400 px-4 py-2 w-auto shadow-lg rounded-lg">Contact Me</Link>

             </div>
        </div>
      
       </nav>
       
   
   )
     
}