
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'other';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.yourdomain.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks, setting deadlines, and tracking progress with team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
    githubUrl: "https://github.com/yourusername/task-management",
    demoUrl: "https://tasks-demo.yourdomain.com",
    featured: true
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard that visualizes complex data sets with customizable charts, filters, and export capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["D3.js", "React", "TypeScript", "Material UI", "REST API"],
    githubUrl: "https://github.com/yourusername/data-dashboard",
    demoUrl: "https://dashboard-demo.yourdomain.com",
    featured: true
  },
  {
    id: 4,
    title: "Realtime Chat Application",
    description: "A realtime messaging platform with private chats, group channels, file sharing, and message search capabilities.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    technologies: ["Socket.io", "React", "Node.js", "MongoDB", "Redux"],
    githubUrl: "https://github.com/yourusername/realtime-chat",
    demoUrl: "https://chat-demo.yourdomain.com",
    featured: false
  }
];

export const skills: Skill[] = [
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "React", level: 5, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Angular", level: 3, category: "frontend" },
  { name: "Vue.js", level: 4, category: "frontend" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express", level: 4, category: "backend" },
  { name: "Python", level: 3, category: "backend" },
  { name: "Django", level: 3, category: "backend" },
  { name: "MongoDB", level: 4, category: "backend" },
  { name: "PostgreSQL", level: 4, category: "backend" },
  { name: "Docker", level: 3, category: "devops" },
  { name: "AWS", level: 3, category: "devops" },
  { name: "CI/CD", level: 3, category: "devops" },
  { name: "Git", level: 5, category: "devops" },
  { name: "RESTful APIs", level: 5, category: "other" },
  { name: "GraphQL", level: 3, category: "other" },
  { name: "UI/UX Design", level: 3, category: "other" },
  { name: "Agile/Scrum", level: 4, category: "other" }
];

export const about = {
  name: "Your Name",
  title: "Software Engineer",
  summary: "I'm a software engineer with expertise in building robust web applications. I specialize in creating responsive, user-friendly interfaces and scalable backend solutions. My approach combines technical excellence with a deep understanding of user needs.",
  longDescription: "I have over 5 years of experience developing modern web applications using JavaScript/TypeScript and related technologies. My work spans from frontend development with React, Angular, and Vue to backend systems with Node.js and Python. I'm passionate about clean code, performance optimization, and creating applications that solve real-world problems.\n\nBeyond coding, I enjoy contributing to open-source projects, mentoring junior developers, and staying up-to-date with emerging technologies. I believe in continuous learning and regularly challenge myself with new programming concepts and tools.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  location: "San Francisco, CA",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
  resume: "/path-to-your-resume.pdf",
};

export const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Software Engineer",
    duration: "2021 - Present",
    description: "Lead the development of web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers."
  },
  {
    company: "Digital Innovations",
    position: "Full Stack Developer",
    duration: "2018 - 2021",
    description: "Developed and maintained multiple client projects using Angular, Express, and MongoDB. Improved application performance by 40%."
  },
  {
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2016 - 2018",
    description: "Created responsive user interfaces with Vue.js and integrated with RESTful APIs. Collaborated with designers to implement UI/UX improvements."
  }
];
