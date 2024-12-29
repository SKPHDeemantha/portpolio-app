import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const facebook = "https://www.facebook.com/heshan.deemantha.7/?viewas=100000686899395";

export default function ContactMe() {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-teal-400 via-green-400 to-lime-400 shadow-lg w-screen h-screen items-center justify-center p-10">
      {/* Left Section */}
      <div className="w-full lg:w-[45%] h-[500px] p-5 flex justify-center items-center rounded-2xl shadow-lg">
        <img src="/contact.jpg" alt="Contact" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[45%] h-[500px] p-6 shadow-xl flex flex-col justify-center items-center space-y-6 rounded-2xl bg-gradient-to-b from-blue-200 to-teal-300">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-700 text-lg text-center mb-6">Feel free to reach out to me via any of these platforms:</p>

        <div className="flex flex-col space-y-4 w-full">
          <Link className="flex items-center p-4 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition duration-300">
            <SiWhatsapp className="mr-3 text-2xl" />
            0776171219
          </Link>
          <Link className="flex items-center p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300">
            <FaFacebookMessenger className="mr-3 text-2xl" />
            facebook
          </Link>
          <Link className="flex items-center p-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition duration-300">
            <IoIosMailUnread className="mr-3 text-2xl" />
            heshandeemantha99@gmail.com
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-6">
          <Link to="/" className="text-2xl text-gray-800 hover:text-gray-500 transition duration-300">
            <MdKeyboardDoubleArrowLeft />
          </Link>
          <button
            className="p-4 bg-gray-500 text-white w-52 rounded-2xl hover:bg-gray-600 transition duration-300"
            to="/"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
