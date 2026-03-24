export const HERO_DATA = {
  tag: "Available for work",
  name: ["Krish", "Agarwal"],
  title: "Full Stack Developer",
  description:
    "Passionate full stack developer specializing in MERN stack, Java, and data analysis. Experienced in building scalable web applications and interactive dashboards.",
  cta: { label: "View My Work", href: "#projects" },
  resume: {
    label: "Download CV",
    href: "https://drive.google.com/file/d/1kVuM0XIRmiI68ey5wlLxQJcbnc4EFfF_/view?usp=drivesdk",
  },
  stats: [
    { num: "2+", label: "Years Exp." },
    { num: "3+", label: "Projects" },
    { num: "2", label: "Internships" },
  ],
};

export const ABOUT_DATA = {
  tag: "About Me",
  title: ["Who I", "Am"],
  paragraphs: [
    "I'm a B.Tech CSE (Data Science) student at Swami Keshvanand Institute of Technology with a passion for full stack development and data analysis. I specialize in building efficient web applications using modern technologies.",
    "I have hands-on experience in Java development, MERN stack projects, and data visualization with Power BI. I'm always eager to learn new technologies and contribute to impactful projects.",
  ],
  facts: [
    "Based in Jaipur, Raj.",
    "B.Tech CSE (DS), SKIT - GPA: 8.03/10",
    "Senior Secondary: 80.20%",
  ],
};

export const SKILLS_DATA = [
  {
    icon: "💻",
    name: "Programming Languages",
    desc: "Proficient in multiple languages for diverse development needs.",
    tags: ["Java", "C++", "JavaScript", "SQL"],
  },
  {
    icon: "🎨",
    name: "Frontend Development",
    desc: "Creating responsive and interactive user interfaces.",
    tags: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: "⚙️",
    name: "Backend Development",
    desc: "Building robust server-side applications and APIs.",
    tags: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    icon: "🗄️",
    name: "Databases",
    desc: "Managing data with relational and NoSQL databases.",
    tags: ["MongoDB", "MySQL"],
  },
  {
    icon: "🛠️",
    name: "Tools & Technologies",
    desc: "Essential tools for development and version control.",
    tags: ["Git", "GitHub", "Power BI"],
  },
  {
    icon: "🧠",
    name: "Core Concepts",
    desc: "Fundamental concepts for efficient programming.",
    tags: [
      "OOP",
      "Data Structures & Algorithms",
      "REST APIs",
      "JWT Authentication",
    ],
  },
];

export const PROJECTS_DATA = [
  {
    num: "01",
    featured: true,
    name: "Project Desk (MERN)",
    desc: "Full-stack role-based academic workflow system for Students, Mentors, and Heads. Features secure JWT and Google OAuth authentication, Excel-based bulk upload with MongoDB integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth"],
    color: "#e8ff6b",
    preview: "dashboard",
    liveUrl: "#",
    githubUrl: "https://github.com/KrishAgarwal-44/Project-Desk",
    images: [
      
    ],
  },
  {
    num: "02",
    name: "Project Management System (MERN)",
    desc: "Full-stack project management application with JWT authentication and role-based access control. Includes task creation, status updates, and priority-based filtering.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    color: "#6bffd4",
    preview: "editor",
    liveUrl: "#",
    githubUrl: "https://github.com/KrishAgarwal-44/Project-Management",
    images: [
      "/images/taskmanager-1.png",
      "/images/taskmanager-2.png",
      "/images/taskmanager-3.png",
      "/images/taskmanager-4.png",
    ],
  },
  {
    num: "03",
    name: "Online Chat Application (Spring Boot)",
    desc: "Real-time chat system handling 1000+ messages per session with minimal latency.",
    tech: ["Spring Boot", "Java", "WebSocket", "MySQL"],
    color: "#ff6b9d",
    preview: "chat",
    liveUrl: "#",
    githubUrl: "https://github.com/KrishAgarwal-44/Chat-Application-",
    images: [
      "/images/chat-image.png",
    ],
  },
];

export const EXPERIENCE_DATA = [
  {
    role: "Data Analyst Intern",
    company: "Celebal Technologies",
    period: "June 2025 — August 2025",
    desc: "Built interactive Power BI dashboards using DAX and Power Query, improving reporting efficiency by 30%. Performed data modeling and transformation, reducing manual effort by 25%.",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
  {
    role: "Java Intern",
    company: "Arootle Private Limited",
    period: "July 2024 — August 2024",
    desc: "Developed and integrated Java modules for functional applications. Identified and resolved 10+ critical bugs, improving stability and performance.",
    tags: ["Java", "Bug Fixing", "Application Development"],
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];
