import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Crown,
  Star,
} from "lucide-react";

const certificationMockData = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "March 2024",
    expiryDate: "March 2026",
    icon: "crown",
    category: "Cloud",
    credentialId: "AWS-12345678",
    credentialUrl: "https://aws.amazon.com/certification",
    description: "Professional-level certification for designing AWS solutions",
    skills: ["AWS", "Cloud Architecture", "Infrastructure"]
  },
  {
    id: 2,
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "January 2024",
    expiryDate: "January 2026",
    icon: "trophy",
    category: "Cloud",
    credentialId: "GCP-87654321",
    credentialUrl: "https://cloud.google.com/certification",
    description: "Advanced cloud platform expertise and best practices",
    skills: ["Google Cloud", "Cloud Solutions", "DevOps"]
  },
  {
    id: 3,
    title: "React Advanced Developer",
    issuer: "React Foundation",
    date: "November 2023",
    expiryDate: "No expiry",
    icon: "award",
    category: "Frontend",
    credentialId: "REACT-11223344",
    credentialUrl: "https://react.dev",
    description: "Advanced React patterns and best practices certification",
    skills: ["React", "Component Design", "Performance"]
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "August 2023",
    expiryDate: "No expiry",
    icon: "star",
    category: "Backend",
    credentialId: "UDEMY-99887766",
    credentialUrl: "https://udemy.com/certificates",
    description: "Comprehensive full-stack development course completion",
    skills: ["Node.js", "Databases", "API Design"]
  },
  {
    id: 5,
    title: "JavaScript ES6+ Mastery",
    issuer: "Coursera",
    date: "June 2023",
    expiryDate: "No expiry",
    icon: "award",
    category: "Frontend",
    credentialId: "COURSERA-55443322",
    credentialUrl: "https://coursera.org",
    description: "Modern JavaScript features and advanced concepts",
    skills: ["JavaScript", "ES6+", "Async Programming"]
  },
  {
    id: 6,
    title: "MongoDB Developer Associate",
    issuer: "MongoDB University",
    date: "April 2023",
    expiryDate: "April 2025",
    icon: "trophy",
    category: "Database",
    credentialId: "MONGO-33445566",
    credentialUrl: "https://university.mongodb.com",
    description: "NoSQL database design and implementation expertise",
    skills: ["MongoDB", "NoSQL Design", "Data Modeling"]
  },
];

const getCategoryColor = (category) => {
  const colors = {
    Cloud: "from-blue-500 to-cyan-500",
    Frontend: "from-purple-500 to-pink-500",
    Backend: "from-green-500 to-emerald-500",
    Database: "from-orange-500 to-red-500",
  };
  return colors[category] || "from-gray-500 to-slate-500";
};

const getIconComponent = (iconType) => {
  const iconMap = {
    award: <Award className="w-8 h-8" />,
    trophy: <Trophy className="w-8 h-8" />,
    crown: <Crown className="w-8 h-8" />,
    star: <Star className="w-8 h-8" />,
  };
  return iconMap[iconType] || <Award className="w-8 h-8" />;
};

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Gradient Border */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(
          cert.category
        )} p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      >
        <div className="absolute inset-0 rounded-2xl bg-gray-950" />
      </div>

      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 group-hover:border-white/20 transition-colors h-full">
        {/* Header with Icon and Category Badge */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(
              cert.category
            )} text-white`}
          >
            {getIconComponent(cert.icon)}
          </motion.div>

          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
            {cert.category}
          </span>
        </div>

        {/* Title and Issuer */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-cyan-400 font-semibold mb-4">{cert.issuer}</p>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {cert.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cert.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              className="px-2 py-1 rounded text-xs bg-white/5 text-cyan-200 border border-cyan-500/20"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Date Information */}
        <div className="space-y-2 mb-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Issued: {cert.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2
              className={`w-4 h-4 ${
                cert.expiryDate === "No expiry"
                  ? "text-green-400"
                  : "text-yellow-400"
              }`}
            />
            <span className="text-gray-300">
              Expires: {cert.expiryDate}
            </span>
          </div>
        </div>

        {/* Credential ID and Link */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">
            ID: <span className="text-cyan-300 font-mono">{cert.credentialId}</span>
          </p>
          <motion.a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-white/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all"
            title="View Credential"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default function Certification() {
  const categories = ["All", ...new Set(certificationMockData.map(c => c.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCerts =
    activeCategory === "All"
      ? certificationMockData
      : certificationMockData.filter((cert) => cert.category === activeCategory);

  return (
    <section
      id="certifications"
      className="relative w-full min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden py-20"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15),_transparent_70%)] blur-3xl" />
      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Award className="w-12 h-12 text-cyan-400" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-4">
            Certifications & Credentials
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Professional certifications validating expertise in cloud platforms, web development, and modern technologies. Continuously learning and growing.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          layout
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredCerts.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No certifications found in this category.
            </p>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          {[
            { label: "Total Certifications", value: certificationMockData.length },
            { label: "Active Credentials", value: certificationMockData.filter(c => c.expiryDate !== "No expiry").length },
            { label: "Categories", value: categories.length - 1 },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
