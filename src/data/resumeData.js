// Resume data structure with all updated information
export const resumeData = {
  personalInfo: {
    name: "Heshan Deemantha",
    title: "Full-Stack Developer & Cloud Enginner",
    email: "heshandeemantha90@gmail.com",
    phone: "+94 776171219",
    location: "Colombo, Sri Lanka",
    linkedin: "linkedin.com/in/heshan-deemantha",
    github: "github.com/SKPHDeemantha",
    portfolio: "heshan-portfolio.com"
  },

  summary: "Passionate Full Stack Developer with expertise in modern web technologies. Specialized in creating responsive, user-friendly applications with clean code and excellent performance. Strong background in both frontend and backend development with a focus on delivering exceptional user experiences.",

  skills: {
    technical: [
      "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", 
      "MongoDB", "HTML5/CSS3", "Tailwind CSS", 
      "Git/GitHub", "REST APIs", "GraphQL", "TypeScript",
      "Python","Java", "Superbase", "AWS Services"
    ],
    soft: [
      "Problem Solving", "Team Collaboration", "Agile Methodology",
      "Communication", "Time Management", "Creative Thinking"
    ],
    tools: [
      "VS Code", "Figma", "Postman", 
       "Vite"
    ]
  },

  experience: [
  {
    position: "Full-Stack Developer & Cloud Engineer",
    company: "Tech Innovations Ltd.",
    duration: "2025 - Present",
    location: "Colombo, Sri Lanka",
    achievements: [
      "Developed and maintained 10+ scalable backend services using Node.js and Express",
      "Optimized database queries (MySQL/MongoDB) improving API response times by 40%",
      "Led a team of 5 developers on a major ERP solution backend integration project",
     
    ]
  },
  {
    position: "SAP Operator",
    company: "Raigam Marketing Service",
    duration: "June 2023 - October 2024",
    location: "Colombo, Sri Lanka",
    achievements: [
      "Managed SAP ERP modules for sales and inventory operations",
      "Generated and analyzed daily, weekly, and monthly business reports using SAP",
      "Coordinated with finance and supply chain teams to ensure accurate data entry",
      "Trained new staff on SAP processes and provided ongoing system support"
    ]
  }
],

  education: [
    {
      degree: "BSc in Software Engineering",
      institution: "University of Sabaragamuwa",
      duration: "2024 - Present",
      location: "Colombo, Sri Lanka",
      // gpa: "3.8",
      achievements: [
        // "Dean's List for academic excellence",
        "Active member of Computer Science Society",
        "Completed internship in Raigam Macketing Service As a System operator."
      ]
    }
  ],

projects: [
  {
    name: "E-Commerce Platform",
    description:
      "A complete full-stack e-commerce solution built using React, Node.js, and MongoDB. Designed with a modern UI/UX and optimized backend APIs to deliver a seamless shopping experience. Features secure authentication, dynamic product management, and integrated order tracking for customers and admins.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
    features: [
      "✅ Secure user authentication and JWT-based authorization",
      "🛒 Dynamic product catalog with advanced search, filters, and sorting",
      "💳 Integrated shopping cart and checkout with order validation",
      "📦 Real-time order management and status tracking for customers",
      "🧾 Admin dashboard for product, order, and user management",
      "📱 Fully responsive design with optimized performance across devices"
    ],
    github: "https://github.com/SKPHDeemantha/E-platformFrontend",
    live: "https://velvetglow2025.netlify.app/"
  },

  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience in a visually stunning and interactive way. The site highlights my professional journey and technical expertise while maintaining high performance and modern UI transitions.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "✨ Animated and responsive design using Framer Motion",
      "🧠 Dynamic sections for About, Projects, Skills, and Contact",
      "🚀 SEO-optimized and fast-loading pages using Vite",
      "📩 Integrated contact form with email automation",
      "🎨 Clean and modern layout aligned with professional branding",
      "☁️ Hosted and deployed using AWS Amplify for global availability"
    ],
    github: "https://github.com/SKPHDeemantha/portpolio-app",
    live: "https://main.dys9r09rupzse.amplifyapp.com/"
  },

  {
    name: "Ticket Booking System",
    description:
      "A collaborative real-time ticket booking web application enabling users to search, reserve, and manage event tickets effortlessly. Built with React and Socket.io, it ensures live seat availability updates and instant synchronization across multiple users.",
    technologies: ["React", "Socket.io", "Node.js", "Express.js", "MongoDB"],
    features: [
      "🎟️ Real-time seat availability updates using WebSockets",
      "👥 Multi-user booking system with instant synchronization",
      "🗂️ Interactive seat selection and reservation interface",
      "📊 Booking management dashboard for users and admins",
      "🔐 Secure payment simulation and transaction confirmation",
      "💡 Optimized backend APIs for fast response and scalability"
    ],
    github: "https://github.com/SKPHDeemantha/TicketBookingSystem",
    live: "still-building"
  },

{
  name: "Ballerina Technical Support Assistant",
  description:
    "A smart technical support application that helps users troubleshoot and resolve issues on desktop and mobile devices. Integrated with an AI assistant that provides instant guidance, answers queries, and assists in problem-solving, improving user support efficiency and satisfaction.",
  technologies: ["React", "Socket.io", "Ballerina.bal", "MongoDB", "AI/Chatbot Integration"],
  features: [
    "🤖 AI-powered assistant for instant issue resolution and guidance",
    "📱 Support for troubleshooting desktop and mobile device problems",
    "💬 Real-time chat interface for user inquiries and support",
    "📊 Ticket management and progress tracking for submitted issues",
    "🔔 Notifications for updates, responses, and follow-ups",
    "👨‍💻 Role-based access for admins, support staff, and users",
    "📱 Fully responsive design optimized for all devices"
  ],
  github: "https://github.com/SKPHDeemantha/portpolio-app",
  live: ".."
}

],


  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2025",
      credential: "AWS-DEV-12345"
    },
    {
      name: "MERN Stack Certification",
      issuer: "Meta",
      date: "2024",
      credential: "META-REACT-67890"
    }
  ],

  languages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Sinhala", proficiency: "Native" },
    { language: "Tamil", proficiency: "Intermediate" }
  ],

  references: [
    {
      name: "Mrs. Kamani Gunathilaka",
      position: "Head of IT Department",
      company: "Raigam Marketing Service",
      contact: "+94 772 366 006"
    }
  ],

  lastUpdated: "October 2025"
};

export default resumeData;
