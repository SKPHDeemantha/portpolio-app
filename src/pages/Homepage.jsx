import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Typewritter from "../components/Typewritter";
import Skills from "../components/Skills/Skills";
import MyProjects from "../components/MyProjects";
import ContactMe from "../components/ContactMe";
import AboutMe from "../components/AboutMe";
import { RiArrowDownDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);

    const sections = ["home", "about", "skills", "projects", "contact"];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white font-sans overflow-x-hidden">

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/40"
          onClick={scrollToTop}
        >
          <MdKeyboardDoubleArrowUp className="text-white text-xl sm:text-2xl" />
        </motion.button>
      )}

      {/* Navbar */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />

        <div className="container mx-auto py-20 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <Typewritter text="Heshan Deemantha" speed={150} clearMessageSpeed={50} />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6">
              Full-Stack Developer & Cloud Engineer
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8">
              I love creating beautiful, responsive web applications with modern
              technologies and clean UI/UX design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("about")}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                View My Work
              </button>

              <a
                href="https://github.com/SKPHDeemantha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 text-center"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            className="flex-1 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/40 rounded-full"
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

            {/* Image */}
            <div className="relative z-10">
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-2">
                <img
                  src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//My%20photo.jpg"
                  alt="Heshan Deemantha"
                  className="w-full h-full rounded-full object-cover border-4 border-gray-800"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-3xl">👋</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <RiArrowDownDoubleLine className="text-3xl text-gray-400" />
        </motion.div>
      </section>

      {/* About */}
      <motion.section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900">
        <AboutMe />
      </motion.section>

      {/* Skills */}
      <motion.section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
        <Skills />
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900">
        <MyProjects />
      </motion.section>

      {/* Contact */}
      <motion.section id="contact" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <ContactMe />

        <div className="mt-16 text-center text-gray-400">
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} Heshan Deemantha. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Back to top
            <RiArrowRightDoubleLine className="ml-2 rotate-90" />
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default Homepage;
