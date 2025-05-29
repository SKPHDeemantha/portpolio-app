import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import StackIcon from "tech-stack-icons";
import { TypeWritter } from "typewritter";
import { FaGithub } from "react-icons/fa";
import { label, link } from "motion/react-client";
import { FaLinkedin } from "react-icons/fa";

const Portfolio = () => {
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
    // Show scroll-to-top button when scrolled down
    setShowScrollTop(window.scrollY > 300);

    // Update active section based on scroll position
    const sections = ["home", "about", "skills", "education", "contact"];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
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

  const skills = [
    { name: "HTML5", icon: "html5", color: "#E34F26" },
    { name: "CSS3", icon: "css3", color: "#1572B6" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
    { name: "ReactJS", icon: "reactjs", color: "#61DAFB" },
    { name: "MySQL", icon: "mysql", color: "#4479A1" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { name: "Java", icon: "java", color: "#007396" },
  ];

  return (
    <div className="relative">
      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50"
          onClick={scrollToTop}
        >
          <MdKeyboardDoubleArrowUp className="text-white text-2xl" />
        </motion.button>
      )}

      {/* Navigation  */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col">
        <div className="flex items-center justify-center flex-1 px-4 py-12 mt-16">
          <div className="flex flex-col md:flex-row w-full max-w-7xl shadow-sky-800 bg-gradient-to-r from-teal-500 to-blue-600 shadow-[0_20px_10px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden transition-all">
            {/* Left: Text Content */}
            <div className="bg-gray-900 w-full md:w-[60%] flex flex-col justify-center p-10 text-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none text-center md:text-left">
              <motion.h1
                className="text-4xl sm:text-5xl font-extrabold leading-snug"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Hi, I'm{" "}
                <div className="text-purple-500">
                  <TypeWritter
                    text="Heshan Deemantha"
                    speed={250}
                    clearMessageSpeed={50}
                  />
                </div>
              </motion.h1>
              <motion.p
                className="mt-4 text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                React Developer | Frontend Engineer
              </motion.p>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection("about")}
                className="mt-8 relative px-10 py-4 rounded-full bg-gradient-to-tr from-red-500 via-orange-400 to-rose-400 text-white text-lg font-semibold shadow-lg group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 rounded-full bg-gradient-to-tr from-red-500 via-orange-400 to-rose-400 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center justify-center">
                  View My Portfolio
                  <RiArrowRightDoubleLine className="text-xl ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            {/* Right: Profile Image */}
            <div className="bg-gradient-to-r from-slate-400 to-slate-100 w-full md:w-[40%] flex items-center justify-center p-6 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
              <motion.div
                className="w-64 h-64 sm:w-60 sm:h-60 bg-gray-200 rounded-full shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//My%20photo.jpg"
                  alt="Heshan Deemantha"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Down arrow indicator */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollToSection("about")}
        >
          <div className="animate-bounce w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer">
            <RiArrowRightDoubleLine className="text-white text-2xl rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen py-20 bg-gradient-to-t from-gray-800 to-gray-600"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-tr from-[#7A1CAC] via-pink-400 to-[#38f0e3] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images//My%20photo.jpg"
                  alt="Heshan Deemantha"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/10 max-w-3xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex flex-wrap gap-6">
                  <div className="flex-1 min-w-[250px]">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500 mb-2">
                      Name
                    </h3>
                    <p className="text-lg text-gray-300">
                      S.K.P. Heshan Deemantha
                    </p>
                  </div>

                  <div className="flex-1 min-w-[250px]">
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500 mb-2">
                      Title
                    </h3>
                    <p className="text-lg text-gray-300">
                      React Developer | Frontend Developer
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-violet-600 to-pink-500 mb-4">
                    About Me
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hello! I'm Heshan, a passionate React Developer with a love
                    for creating interactive and user-friendly web applications.
                    I started my journey in web development 6 months ago when I
                    decided to turn my interest in technology into a career. I
                    enjoy solving problems and building dynamic web experiences
                    using modern JavaScript frameworks. I'm always eager to
                    learn new technologies and improve my skills.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    When I'm not coding, you can find me exploring new tech
                    blogs, reading about UI/UX design, or hiking in nature.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative p-1 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-xl hover:shadow-2xl transition-shadow"
                style={{
                  boxShadow: `0 4px 24px -2px ${skill.color}40`,
                }}
              >
                <div className="flex flex-col items-center justify-center bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl space-y-4 border border-white/5 hover:border-white/10 transition-all">
                  <StackIcon
                    name={skill.icon}
                    className="text-6xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <p className="text-xl font-medium text-gray-100">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="max-w-4xl mx-auto mt-20 p-8 rounded-3xl bg-gray-800/50 backdrop-blur-lg border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-lg" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
              Academic Journey
            </h2>
            <div className="space-y-6 relative z-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-cyan-500/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-cyan-400"
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
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    BSc. Software Engineering
                  </h3>
                  <p className="text-gray-300">
                    University of Sabaragamuwa
                    <br />
                    2024 - Present
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">
                    Advanced Level Education
                  </h3>
                  <p className="text-gray-300">
                    Mahinda Rajapaksha College
                    <br />
                    Physical Science Stream - 2022
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education/Projects Section */}
      <section
        id="education"
        className="min-h-screen py-20 bg-gradient-to-br from-[#2E073F] via-[#7A1CAC] to-gray-600"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-tr from-[#7A1CAC] via-pink-400 to-[#38f0e3] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education & Projects
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Education Card */}
            <motion.div
              className="w-full lg:w-[35%]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#7A1CAC]/40 transition-all duration-300 flex flex-col items-center justify-center space-y-6 p-8 border border-white/10 hover:border-[#38f0e3]/30">
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
            </motion.div>

            {/* Projects Card */}
            <motion.div
              className="w-full lg:w-[65%]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#38f0e3]/40 transition-all duration-300 p-8 border border-white/10 hover:border-[#7A1CAC]/30">
                <div className="flex flex-col space-y-6 h-full">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 bg-[#7A1CAC]/30 rounded-full flex items-center justify-center">
                        <span className="text-[#38f0e3] text-xl font-bold">
                          01
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-pink-400 to-[#38f0e3] bg-clip-text">
                        Software Engineering Degree
                      </h3>
                    </div>
                    <p className="text-gray-300 pl-16">
                      I am Studying a Software Engineering degree in
                      Sabaragamuwa University, Sri Lanka. Learning modern
                      programming languages, software development methodologies,
                      and gaining hands-on experience in building real-world
                      applications.
                    </p>
                    <div className="pl-16">
                      <div className="w-full h-48 bg-gray-800 rounded-xl flex items-center justify-center">
                        <span className="text-gray-400">
                          Project Demo Video
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 bg-[#38f0e3]/30 rounded-full flex items-center justify-center">
                        <span className="text-[#7A1CAC] text-xl font-bold">
                          02
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-[#38f0e3] to-pink-400 bg-clip-text">
                        Portfolio Website
                      </h3>
                    </div>
                    <p className="text-gray-300 pl-16">
                      Developed a responsive portfolio website using React and
                      Tailwind CSS, showcasing my skills, projects, and
                      educational background with modern animations and a clean
                      design.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-white items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                icon: (
                  <FaFacebookMessenger className="text-3xl text-blue-400" />
                ),
                label: "Facebook Messenger",
                bg: "from-blue-500/10 to-gray-800/20",
                link: "https://www.facebook.com/heshan.deemantha.7",
              },
              {
                icon: <IoIosMailUnread className="text-3xl text-red-400" />,
                label: "heshandeemantha99@gmail.com",
                bg: "from-red-500/10 to-gray-800/20",
              },
              {
                label: "GitHub ",
                icon: <FaGithub className="text-3xl text-white" />,
                link: "https://github.com/SKPHDeemantha",
                bg: "from-white-500/10 to-gray-800/20",
              },
              {
                label: "LinkedIn ",
                icon: <FaLinkedin className="text-3xl text-blue-500" />,
                link: "https://www.linkedin.com/in/heshan-deemantha-4b3b34213/",
                bg: "from-blue-500/10 to-gray-800/20",
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
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <p className="text-lg font-medium">{item.label}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-20 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>
              © {new Date().getFullYear()} Heshan Deemantha. All rights
              reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Back to top
              <RiArrowRightDoubleLine className="ml-2 rotate-90" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
