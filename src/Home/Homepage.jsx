export default function Homepage() {
  return (
      <div className="w-screen h-screen bg-orange-300 flex items-center justify-center">
          <div className="bg-red-500 p-8 flex flex-col items-center justify-center rounded-lg shadow-md">
              <p className="text-white text-center text-lg">
                  Hello Everyone<br />I am Heshan <br />Deemantha
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Software Engineer
              </button>
          </div>
      </div>
  );
}
