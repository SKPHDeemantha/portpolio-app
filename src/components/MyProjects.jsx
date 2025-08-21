import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function MyProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/public/images/1738522648648EditPage.jpg,EditPage.jpg",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User Authentication", "Payment Processing", "Admin Dashboard"],
      github: "https://github.com/SKPHDeemantha/ecommerce-platform",
      demo: "https://velvetglow2025.netlify.app/",
      year: "2024",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Modern responsive portfolio built with React and Tailwind CSS. Features smooth animations and interactive UI elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      features: ["Responsive Design", "Smooth Animations", "Dark Mode"],
      github: "https://github.com/SKPHDeemantha/portfolio",
      demo: "https://your-portfolio.netlify.app",
      year: "2024",
      category: "frontend"
    },
    {
      id: 3,
      title: "Ticket Booking System",
      description: "Collaborative ticket booking application with real-time updates using Socket.io and Express.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400",
      techStack: ["React", "Socket.io", "Express", "PostgreSQL"],
      features: ["Real-time Updates", "Team Collaboration", "Drag & Drop"],
      github: "https://github.com/SKPHDeemantha/task-manager",
      demo: "https://your-task-manager.netlify.app",
      year: "2024",
      category: "fullstack"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w-400",
      techStack: ["React", "OpenWeather API", "Chart.js"],
      features: ["Location Detection", "5-Day Forecast", "Data Visualization"],
      github: "https://github.com/SKPHDeemantha/weather-dashboard",
      demo: "https://your-weather-app.netlify.app",
      year: "2023",
      category: "frontend"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400",
      techStack: ["React", "Socket.io", "MongoDB", "JWT"],
      features: ["Private Messaging", "Group Chats", "File Sharing"],
      github: "https://github.com/SKPHDeemantha/chat-app",
      demo: "https://your-chat-app.netlify.app",
      year: "2024",
      category: "fullstack"
    },
    {
      id: 6,
      title: "Telegram-Bot",
      description: "A custom Telegram bot built to automate tasks, provide quick responses, and enhance user interaction through real-time messaging.",
      image: "https://xvuxswvxdsxzfjtsdorn.supabase.co/storage/v1/object/sign/portfolioImages/2106.i201.007.F.m004.c9.call%20center%20technical%20support%20isometric.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MDE4ODI4YS1hNzMwLTQ2Y2MtOGRmNS1hMDI3MWU3NDVjZDUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3R0Zm9saW9JbWFnZXMvMjEwNi5pMjAxLjAwNy5GLm0wMDQuYzkuY2FsbCBjZW50ZXIgdGVjaG5pY2FsIHN1cHBvcnQgaXNvbWV0cmljLmpwZyIsImlhdCI6MTc1NTc4NDQyNSwiZXhwIjoyMDcxMTQ0NDI1fQ.crsGxB9Tmczmsqj-_mktMhknum9NpMWbPZm8eixi_OY", 
      techStack: ["Node.js", "Telegram Bot API", "Express"],
      features: ["Automated Replies", "Command Handling", "Real-time Messaging"],
      github: "https://github.com/SKPHDeemantha/telegram-bot",
      demo: "https://t.me/YourBotUsername", 
      year: "2023",
      category: "backend"
    }
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Full Stack", value: "fullstack" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Showcasing my journey through code and creativity
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
