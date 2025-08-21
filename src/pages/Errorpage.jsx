import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome, FaArrowLeft } from "react-icons/fa";

const Errorpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <h1 className="text-9xl lg:text-[200px] font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,0,255,0.6)]">
            404
          </h1>
        </motion.div>

        {/* Error Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <FaExclamationTriangle className="text-6xl text-blue-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(0,0,255,0.6)]" />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Oops! It seems the page you're looking for has disappeared. Don’t
            worry, you can always go back or return home.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 px-8 py-4 
              bg-blue-500/20 backdrop-blur-md border border-blue-400/30 
              text-white rounded-full font-semibold 
              hover:bg-blue-500/30 hover:shadow-[0_0_25px_rgba(0,0,255,0.4)] 
              transition-all duration-300"
            >
              <FaHome className="text-lg" />
              <span>Go Home</span>
            </motion.button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center space-x-2 px-8 py-4 
            bg-white/5 backdrop-blur-md border border-white/10 
            text-gray-300 rounded-full font-semibold 
            hover:border-blue-400 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(0,0,255,0.4)] 
            transition-all duration-300"
          >
            <FaArrowLeft className="text-lg" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 text-gray-400"
        >
          <p className="text-sm">
            Error Code: 404 | If this persists, contact me at{" "}
            <a
              href="mailto:heshandeemantha99@gmail.com"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              heshandeemantha99@gmail.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -120 - 60],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Errorpage;
