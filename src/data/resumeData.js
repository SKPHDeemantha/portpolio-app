// Resume data structure with all updated information
export const resumeData = {
  personalInfo: {
    name: "Heshan Deemantha",
    title: "BackEnd Developer & Cloud Enginner",
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
      "Python", "Django", "Firebase", "AWS Services"
    ],
    soft: [
      "Problem Solving", "Team Collaboration", "Agile Methodology",
      "Communication", "Time Management", "Creative Thinking"
    ],
    tools: [
      "VS Code", "Figma", "Postman", "Docker", 
      "Webpack", "Vite"
    ]
  },

  experience: [
  {
    position: "Backend Developer",
    company: "Tech Innovations Ltd.",
    duration: "2022 - Present",
    location: "Colombo, Sri Lanka",
    achievements: [
      "Developed and maintained 10+ scalable backend services using Node.js and Express",
      "Optimized database queries (MySQL/MongoDB) improving API response times by 40%",
      "Led a team of 3 developers on a major e-commerce backend integration project",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
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
      degree: "BSc in Computer Science",
      institution: "University of Colombo",
      duration: "2018 - 2022",
      location: "Colombo, Sri Lanka",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for academic excellence",
        "President of Computer Science Society",
        "Best Final Year Project Award"
      ]
    }
  ],

  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout",
        "Order management system",
        "Admin dashboard"
      ],
      github: "github.com/SKPHDeemantha/ecommerce-platform",
      live: "ecommerce-demo.heshan.com"
    },
    {
      name: "Portpolio ",
      description: "Collaborative task management application with real-time updates",
      technologies: ["React", "Socket.io"],
      features: [
        "Real-time collaboration",
        "Drag & drop interface",
        "Team management",
        "Progress tracking",
        "Notifications system"
      ],
      github: "github.com/SKPHDeemantha/task-manager",
      live: "tasks.heshan.com"
    }
  ],

  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
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

  lastUpdated: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
};

export default resumeData;
