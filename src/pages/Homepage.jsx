export default function Homepage() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="flex flex-row w-[80%] h-[90vh] justify-center items-center bg-white shadow-xl rounded-2xl">
      
        <div className="p-8 bg-gray-800 w-auto h-auto rounded-xl shadow-lg">
          <p className="text-4xl text-white font-semibold">
            <span className="text-xl block">Hello Everyone</span>
            <span className="block">I am Heshan</span>
            <span className="block text-2xl mt-2">Deemantha</span>
          </p>
          <button className="mt-10 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-400 transition duration-300">
            Software Engineer
          </button>
        </div>

 
        <div className="w-56 h-56 ml-12 bg-gray-100 rounded-full overflow-hidden shadow-lg">
          <img className="w-full h-full object-cover" src="/profile.jpg" alt="Profile" />
        </div>
      </div>

      <div className="w-[20%] h-[90vh] bg-blue-600 rounded-2xl shadow-2xl"></div>
    </div>
  );
}
