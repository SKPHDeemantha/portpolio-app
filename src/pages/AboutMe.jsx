export default function AboutMe(){
    return(
        <div className="flex flex-row justify-center items-center p-20">

             <div className="w-52 h-52 bg-red-600 rounded-full mr-80"></div>
        <div className="flex flex-col w-80 h-auto items-center justify-center bg-slate-500 p-5 shadow-md rounded-2xl">
            <h1>About Me</h1>
            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Dolore nobis voluptate provident alias hic necessitatibus 
                 velit ipsa quod corporis, ducimus quo sapiente mollitia expedita 
                 accusamus consequatur porro distinctio temporibus? Necessitatibus.<br/><br/></p>

             <p>My skills</p>    
        </div>
       
        </div>
    )
}