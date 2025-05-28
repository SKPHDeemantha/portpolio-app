import Navbar from "../components/Navbar";

export default function MyProjects() {
  return (
    <div className="w-full min-h-screen bg-gray-800">
      <Navbar />

      <div className="w-full h-[calc(100vh-4rem)] flex flex-col lg:flex-row gap-8 p-8 bg-gradient-to-br from-[#2E073F] via-[#7A1CAC] via-40% via-pink-400 via-[#38f0e3]/20 via-green-300 via-rose-300/20 to-gray-600/70">
        {/* Education Card */}
        <div className="w-full lg:w-[35%] h-full flex items-center justify-center p-4 mt-8 lg:mt-24">
          <div className="w-full h-80 bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#7A1CAC]/40 transition-all duration-300 flex flex-col items-center justify-center space-y-6 p-6 border border-white/10 hover:border-[#38f0e3]/30">
            <div className="p-4 bg-gradient-to-r from-[#7A1CAC] to-[#38f0e3] rounded-full">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#7A1CAC] via-pink-400 to-[#38f0e3] bg-clip-text text-transparent">
              Education
            </h1>
            <p className="text-gray-300 text-center">
              Exploring the spectrum of knowledge
            </p>
          </div>
        </div>

        {/* Content Card */}
        <div className="w-full lg:w-[60%] h-full p-4 mt-8 lg:mt-24">
          <div className="w-full h-96 bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#38f0e3]/40 transition-all duration-300 p-8 border border-white/10 hover:border-[#7A1CAC]/30">
            <div className="flex flex-col space-y-6 h-full overflow-y-auto custom-scrollbar">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-[#7A1CAC]/30 rounded-full flex items-center justify-center">
                    <span className="text-[#38f0e3] text-xl font-bold">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-400 to-[#38f0e3] bg-clip-text">
                    Software Engineering Degree
                  </h3>
                </div>
                <p className="text-gray-300 pl-16">
                  I am Studying a Software Engineering degree in Sabaragamuwa
                  University, Sri Lanka. Learning modern programming languages,
                  software development methodologies, and gaining hands-on
                  experience in building real-world applications.
                </p>
                <video
                  width={400}
                  controls
                  className="w-60 h-60 p-3 border-white"
                >
                  <source
                    src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//Untitled%20Video%20-%20Made%20With%20Clipchamp.mp4 "
                    type="video/mp4"
                  ></source>
                </video>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-[#38f0e3]/30 rounded-full flex items-center justify-center">
                    <span className="text-[#7A1CAC] text-xl font-bold">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-[#38f0e3] to-pink-400 bg-clip-text">
                    Machine Learning Certification
                  </h3>
                </div>
                <p className="text-gray-300 pl-16">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-pink-400/30 rounded-full flex items-center justify-center">
                    <span className="text-[#38f0e3] text-xl font-bold">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-400 to-[#7A1CAC] bg-clip-text">
                    Web Development Bootcamp
                  </h3>
                </div>
                <p className="text-gray-300 pl-16">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(#7a1cac, #38f0e3);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
