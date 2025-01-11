import { Link } from "react-router-dom";

export default function Navbar(){
   return(
   
       <nav className="w-full h-auto flex flex-row p-3 mr-10" >
       <div> 
        <Link to="/" className="bg-orange-400 p-2 ">Home</Link>
       </div>

       <div>
        <Link to="/aboutme" className="bg-orange-400 p-2 w-10 space-x-2">About Me</Link>
       </div>

       <div>
        <Link to="/skills" className="bg-orange-400 p-2 w-5">Skills</Link>
       </div>

       <div>
        <Link to="/myprojects" className="bg-orange-400 p-2 w-5">My Projects</Link>
       </div>

       <div>
        <Link to="/contact" className="bg-orange-400 p-2 w-5">Contact Me</Link>
       </div>
       
       </nav>
       
   
   )
     
}