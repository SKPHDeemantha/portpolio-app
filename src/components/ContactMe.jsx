import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Navbar from "./Navbar";

export default function ContactMe() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <Navbar />

      <div className="flex flex-col items-center px-6 py-16 md:py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
            Let's Connect
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              icon: <SiWhatsapp className="text-3xl text-green-400" />,
              label: "0776171219",
              bg: "from-green-500/10 to-gray-800/20",
            },
            {
              icon: <FaFacebookMessenger className="text-3xl text-blue-400" />,
              label: "Facebook Messenger",
              bg: "from-blue-500/10 to-gray-800/20",
              link: "https://www.facebook.com/heshan.deemantha.7",
            },
            {
              icon: <IoIosMailUnread className="text-3xl text-red-400" />,
              label: "heshandeemantha99@gmail.com",
              bg: "from-red-500/10 to-gray-800/20",
              link:"heshandeemantha99@gmail.com",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.bg} border border-white/10 hover:border-white/20 shadow-lg backdrop-blur-sm transition-all duration-300`}
            >
              <div className="flex items-center space-x-4">
                {item.icon}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
                    {item.label}
                  </a>
                ) : (
                  <p className="text-lg font-medium">{item.label}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <Link to="/">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 px-6 py-3 rounded-full hover:scale-105 transition transform duration-300 text-white shadow-md">
              <MdKeyboardDoubleArrowLeft className="text-xl" />
              <span>Back to Home</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
