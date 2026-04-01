export const HERO_DATA = {
  tag: "Available for work",
  name: ["Krish", "Agarwal"],
  title: "Full Stack Developer",
  description:
    "Full stack developer specializing in MERN stack, Java, and data analysis. Building scalable web applications, real-time systems, and interactive dashboards.",
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
    "I'm a B.Tech CSE (Data Science) student at SKIT, Jaipur — someone who genuinely enjoys the craft of building things. Whether it's a clean REST API or a dashboard that turns messy data into clear insight, I care about the details that make software feel right.",
    "I've worked across the full stack — from Spring Boot backends to React frontends — and spent time as a Data Analyst Intern building Power BI dashboards that actually got used. I'm not looking for easy problems. I want to work on things that matter.",
  ],
  facts: [
    "Based in Jaipur, Rajasthan",
    "B.Tech CSE (Data Science) — GPA 8.03",
    "Senior Secondary — 80.20%",
    "Open to on-site & remote roles",
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
    desc: "Full-stack role-based academic workflow system for Students, Mentors, and Heads. Improved project allocation efficiency by 60%. Secure authentication via JWT and Google OAuth reduced unauthorized access by 90%. Excel-based bulk upload with MongoDB cut manual processing by 70%.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Google OAuth"],
    color: "#e8ff6b",
    preview: "dashboard",
    liveUrl: "#",
    githubUrl: "https://github.com/KrishAgarwal-44/Project-Desk",
    images: [],
  },
  {
    num: "02",
    name: "Project Management System (MERN)",
    desc: "Full-stack project management app with JWT authentication and role-based access for Admin and User. Features task creation, status updates, and priority-based filtering (Low/Medium/High). RESTful APIs built following MVC architecture.",
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
    desc: "Real-time chat system handling 1000+ messages per session with minimal latency. Timestamp-based message ordering for accurate conversation history. Optimized DB queries and caching reduced response time by 30%.",
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
    desc: "Built interactive Power BI dashboards using DAX and Power Query, improving reporting efficiency by 30%. Performed data modeling and transformation, reducing manual reporting effort by 25% and improving data accuracy.",
    tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  },
  {
    role: "Java Intern",
    company: "Arootle Private Limited",
    period: "July 2024 — August 2024",
    desc: "Developed and integrated Java modules for a functional application, enhancing feature efficiency. Identified and resolved 10+ critical bugs, improving application stability and performance.",
    tags: ["Java", "Bug Fixing", "Application Development"],
  },
];

export const CERTIFICATIONS_DATA = [
  {
    title: "Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    date: "2025",
    icon: "☁️",
    color: "#5dd8c0",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=22F9F76A019F8E85EE4E7F33C1CCED8AF2025012411DA0EAB42CFBAD89F1125F",
    tags: ["Cloud", "OCI", "Infrastructure"],
    
  },
  {
    title: "Software Engineer Intern",
    issuer: "Hackerrank",
    date: "2025",
    icon: "💻",
    color: "#5dd8c0",
    credentialUrl:"https://www.hackerrank.com/certificates/iframe/181c4c73bf02",
    tags: ["Software Engineering", "Internship"],
  },
  {
    title: "Java Foundation Course",
    issuer: "Oracle",
    date: "2025",
    icon: "☕",
    color: "#f89820",
    credentialUrl: "https://mylearn.oracle.com/ou/learning-path/java-explorer/79726",
    tags: ["Java", "OOP", "Core Java"],
  },
  {
    title: "Prompt Engineering",
    issuer: "DeepLearning.AI",
    date: "2024",
    icon: "🤖",
    color: "#e066a0",
    credentialUrl: "https://learn.deeplearning.ai/accomplishments/282e59a1-4fcc-40c1-8e7c-daa190aa55ff",
    tags: ["AI", "LLMs", "Prompt Design"],
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
