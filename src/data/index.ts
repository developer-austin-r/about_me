import { Mail, Phone, Shield, Users, BookOpen, Gavel, FileText, CloudCog, ShoppingCart } from "lucide-react";
import { Github, Linkedin, Instagram, Medium, Youtube } from "@/components/icons";

export const PORTFOLIO_DATA = {
  hero: {
    name: "Austin",
    role: "Full Stack Developer",
    tagline: "Building premium, scalable, and modern digital experiences.",
    yearsOfExperience: "3+",
  },
  about: {
    summary:
      "Full Stack Developer with 3+ years of experience building scalable and modern web applications using Laravel, React, Next.js, and cloud technologies. Passionate about solving complex problems, optimizing application performance, and building secure production-ready systems. Quick learner with strong adaptability to new technologies and modern development practices, leveraging AI-powered tools to improve productivity, development efficiency, and continuous learning.",
  },
  skills: {
    frontend: [
      { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Redux",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
      { name: "Vue.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "HTML5",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Bootstrap",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
    backend: [
      { name: "Laravel",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "NestJS",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { name: "Core PHP",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    ],
    database: [
      { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Redis",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "Prisma",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    ],
    devops: [
      { name: "Docker",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "AWS",            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
      { name: "Vercel",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { name: "AWS EC2",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "AWS S3",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "CloudWatch",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Nginx",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
      { name: "Linux",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "Apache Solr",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" },
    ],
    tools: [
      { name: "Git",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Postman",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Figma",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Swagger",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
      { name: "WSL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" },
      { name: "Burp Suite", icon: "" },
    ],
    languages: [
      { name: "PHP",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    ],
  },
  projects: [
    {
      id: 3,
      title: "Crexo Classroom — EdTech Platform",
      role: "Senior Developer",
      description: "Worked as a Senior Developer by contributing to technical decision-making, implementation planning, development strategies, and maintaining scalable architecture and code quality. Contributed to authentication, Shopify GraphQL Storefront API integration, and development of classroom modules.",
      techStack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "TypeScript"],
      icon: BookOpen,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 2,
      title: "Nexus Assurance — CRM SaaS Platform",
      role: "Full Stack Developer",
      description: "Worked on a SaaS-based CRM application by contributing to new module development, feature implementation, roles and permission management, and report management functionalities. Implemented Laravel queue jobs for email processing and large data export handling to improve application performance.",
      techStack: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS", "AWS EC2", "Docker", "AWS S3"],
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "CM Auction — Bidding Platform",
      role: "Full Stack Developer",
      description: "Worked on an auction-based bidding platform by contributing to lot management, bidding workflows, and user dashboard functionalities. Implemented features for admin-created lots, lot navigation and switching, real-time bidding-related modules, and backend business logic integration.",
      techStack: ["Laravel", "React", "MySQL", "Tailwind CSS", "JavaScript"],
      icon: Gavel,
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: 6,
      title: "Loomyn — DevOps Infrastructure",
      role: "DevOps Engineer",
      description: "Contributed to the application deployment and infrastructure setup by implementing CI/CD pipelines using GitHub Actions for automated build and deployment workflows. Dockerized the application and configured production hosting using AWS EC2 instances, Nginx, and PM2.",
      techStack: ["GitHub Actions", "Docker", "AWS EC2", "AWS S3", "PM2", "Nginx"],
      icon: CloudCog,
      color: "from-slate-500 to-gray-400",
    },
    {
      id: 1,
      title: "Cyber Crime Case Analyst System",
      role: "Full Stack Developer",
      description: "Developed a cybercrime case management system to manage victim, accused, FIR, and CSR records efficiently. Implemented a case-matching algorithm to help investigators identify related cases and improve investigation workflows. Added multiple role-based authentication and report management features for secure access control.",
      techStack: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "jQuery"],
      icon: Shield,
      color: "from-red-500 to-rose-500",
      githubLink: "https://github.com/developer-austin-r/Cyber_crime",
    },
    {
      id: 5,
      title: "Dynamic Content Management System",
      role: "Full Stack Developer",
      description: "Developed a dynamic content management system with both admin and client portals, allowing administrators to manage website content directly from the backend. Implemented modules for home, about, contact, portfolio, and blog/post management with dynamic media.",
      techStack: ["PHP", "Bootstrap", "MySQL", "HTML", "CSS", "JavaScript"],
      icon: FileText,
      color: "from-emerald-500 to-teal-500",
      githubLink: "https://github.com/developer-austin-r/PHP-Dynamic-Web-Application",
    },
    {
      id: 7,
      title: "MLM E-Commerce Platform",
      role: "Full Stack Developer",
      description: "Contributed to the development of an MLM-based e-commerce platform by implementing user management, authentication, referral commission calculation, and cron-based automation functionalities. Worked on product management modules and Razorpay payment gateway integration.",
      techStack: ["Laravel", "React", "MySQL", "Tailwind CSS", "JavaScript"],
      icon: ShoppingCart,
      color: "from-pink-500 to-rose-400",
    }
  ],
  experience: [
    {
      id: 1,
      role: "PHP Laravel Developer",
      company: "App Innovation Technologies",
      duration: "Aug 2025 – Present",
      description: "Working on multiple SaaS, CRM, and enterprise-level web applications using Laravel, React, Vue.js, and modern development technologies. Contributing to backend API development, database design, third-party API integrations, authentication systems, queue jobs, and performance optimization. Involved in complex problem-solving, feature ownership, deployment support, application security improvements, and scalable architecture implementation across various client projects."
    },
    {
      id: 2,
      role: "PHP Laravel Developer",
      company: "Cloverworld Technologies",
      duration: "Dec 2022 – Feb 2024",
      description: "Worked as a Full Stack Developer on multiple web applications using Core PHP, Laravel, MySQL, JavaScript, and modern frontend technologies. Contributed to feature development, production issue handling, bug fixing, backend API development, and application optimization across various client projects. Took ownership of assigned modules and collaborated with the team to deliver scalable, reliable, and production-ready solutions."
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Scott Christian College, Nagercoil",
      duration: "Jun 2021 – May 2024",
      description: "Specialized in Computer Programming, Web Development, and Software Application Development. Active member of the Computer Applications Association, Science Club, and NCC (National Cadet Corps). Served as a Student Mentor from 2021 to 2024, supporting academic and student coordination activities."
    },
    {
      id: 2,
      degree: "Higher Secondary Education (XII)",
      institution: "Baliah Marthandam Higher Secondary School, Avaraikulam",
      duration: "Jun 2020 – Apr 2021",
      description: "Completed higher secondary education with a focus on academic and extracurricular activities. Participated in NSS (National Service Scheme) activities and student engagement programs. Secured an academic score of 68.62%."
    }
  ],
  certifications: [
    {
      id: 4,
      title: "CSS",
      issuer: "HackerRank",
      date: "October 2022",
      credentialId: "E71FB3DB8289",
      link: "https://www.hackerrank.com/certificates/e71fb3db8289",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      id: 5,
      title: "Phase 3 - Ethical Hacking Training From Prompt Infotech Educational Scholarship (PIES)",
      issuer: "Prompt Infotech Coimbatore",
      date: "April 2022",
      credentialId: "PITHPIESPIII0077",
      skills: ["Linux", "Burp Suite"],
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      id: 6,
      title: "Python for Hacking",
      issuer: "Prompt Infotech Coimbatore",
      credentialId: "PITPFE011768",
      skills: ["Linux", "Ethical Hacker"],
      iconColor: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      id: 7,
      title: "Network & Network Security",
      issuer: "Prompt Infotech Coimbatore",
      credentialId: "PITNNS001706",
      skills: ["Linux", "Ethical Hacker"],
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/developer-austin-r", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/developer-austin-r/", icon: Linkedin },
    { name: "Instagram", url: "https://www.instagram.com/techie_austin_/", icon: Instagram },
    { name: "YouTube", url: "https://www.youtube.com/@TechSurveyTamil", icon: Youtube },
    { name: "Medium", url: "https://medium.com/@austindev2003", icon: Medium },
    { name: "Email", url: "mailto:austindev2003@gmail.com", icon: Mail },
    { name: "Phone", url: "tel:+919629765171", icon: Phone }
  ]
};
