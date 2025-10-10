import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function MyProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image:
        "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images/1738522648648EditPage.jpg,EditPage.jpg",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User Authentication", "Payment Processing", "Admin Dashboard"],
      github: "https://github.com/SKPHDeemantha/ecommerce-platform",
      demo: "https://velvetglow2025.netlify.app/",
      year: "2024",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio built with React and Tailwind CSS. Features smooth animations and interactive UI elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      features: ["Responsive Design", "Smooth Animations", "Dark Mode"],
      github: "https://github.com/SKPHDeemantha/portfolio",
      demo: "https://your-portfolio.netlify.app",
      year: "2024",
      category: "frontend",
    },
    {
      id: 3,
      title: "Ticket Booking System",
      description:
        "Collaborative ticket booking application with real-time updates using Socket.io and Express.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400",
      techStack: ["React", "Socket.io", "Express", "mySQL"],
      features: ["Real-time Updates", "Team Collaboration", "Drag & Drop"],
      github: "https://github.com/SKPHDeemantha/task-manager",
      demo: "https://your-task-manager.netlify.app",
      year: "2024",
      category: "fullstack",
      status: "building",
    },
    // {
    //   id: 4,
    //   title: "Weather Dashboard",
    //   description:
    //     "Interactive weather dashboard with location-based forecasts and beautiful data visualizations.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w-400",
    //   techStack: ["React", "OpenWeather API", "Chart.js"],
    //   features: ["Location Detection", "5-Day Forecast", "Data Visualization"],
    //   github: "https://github.com/SKPHDeemantha/weather-dashboard",
    //   demo: "https://your-weather-app.netlify.app",
    //   year: "2023",
    //   category: "frontend",
    // },
    {
      id: 6,
      title: "Telegram-Bot",
      description:
        "A custom Telegram bot built to automate tasks, provide quick responses, and enhance user interaction through real-time messaging.",
      image:
        "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/sign/portfolioImages/113.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MDE4ODI4YS1hNzMwLTQ2Y2MtOGRmNS1hMDI3MWU3NDVjZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW9JbWFnZXMvMTEzLmpwZyIsImlhdCI6MTc2MDA4NTQwNywiZXhwIjoxOTE3NzY1NDA3fQ.UfTgourBtZtLVbi3cZpPTfZeEK5aIT9ewM3NXkqrplo",
      techStack: ["Node.js", "Telegram Bot API", "Express"],
      features: ["Automated Replies", "Command Handling", "Real-time Messaging"],
      github: "https://github.com/SKPHDeemantha/telegram-bot",
      demo: "https://t.me/YourBotUsername",
      year: "2023",
      category: "backend",
      status: "building",
    },
    {
      id: 7,
      title: "Shimmers-ERP Solution",
      description:
        "A comprehensive ERP system designed to streamline business operations, including sales, purchasing, inventory, and finance management, built with a modern and scalable architecture.",
      image:
        "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/sign/portfolioImages/7076235.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MDE4ODI4YS1hNzMwLTQ2Y2MtOGRmNS1hMDI3MWU3NDVjZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW9JbWFnZXMvNzA3NjIzNS5qcGciLCJpYXQiOjE3NjAwODM2NTcsImV4cCI6MTkxNzc2MzY1N30.8a-gJLDxlKIs_53IUnSOi4iYd_PkQGNrz6AYlekRS1Y",
      techStack: ["Next.js", "TypeScript", "MySQL", "Prisma"],
      features: [
        "Sales & Purchase Management",
        "Inventory Tracking",
        "Customer & Supplier Management",
        "Invoice Generation",
        "User Authentication & Roles",
      ],
      github: "https://github.com/SKPHDeemantha/Shimmers-production",
      demo: "https://shimmers-erp-demo.vercel.app",
      year: "2025",
      category: "backend" && "real-world",
    },
    // {
    //   id: 8,
    //   title: "Chat Application",
    //   description:
    //     "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
    //   image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400",
    //   techStack: ["React", "Socket.io", "MongoDB", "JWT"],
    //   features: ["Private Messaging", "Group Chats", "File Sharing"],
    //   github: "https://github.com/SKPHDeemantha/chat-app",
    //   demo: "https://your-chat-app.netlify.app",
    //   year: "2024",
    //   category: "fullstack",
    //   status: "building",
    // },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Backend", value: "backend" },
    { label: "Real World", value: "real-world" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Showcasing my journey through creativity, code, and innovation.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl scale-105"
                  : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() =>
                  project.status === "building" && setHoveredProject(project.id)
                }
                onMouseLeave={() => setHoveredProject(null)}
                className="relative"
              >
                <ProjectCard project={project} />

                {/* 🚧 Still Building Popup */}
                {project.status === "building" && hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-2xl"
                  >
                    <p className="text-cyan-400 font-semibold text-lg animate-pulse">
                      🚧 Still Building...
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
