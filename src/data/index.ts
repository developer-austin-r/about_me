import { Mail, Phone } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "@/components/icons";

export const PORTFOLIO_DATA = {
  hero: {
    name: "Austin",
    role: "Full Stack Developer",
    tagline: "Building premium, scalable, and modern digital experiences.",
    yearsOfExperience: "5+",
  },
  about: {
    summary:
      "I'm a passionate Full Stack Developer with expertise in building highly interactive, scalable, and performance-optimized web applications. I specialize in modern JavaScript frameworks and cloud technologies, always striving to create elegant solutions to complex problems.",
  },
  skills: {
    frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    backend: ["Node.js", "Express.js", "NestJS", "Python", "GraphQL", "REST APIs"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
    devops: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Vercel"],
    tools: ["Git", "Jest", "Postman", "Figma", "Linux"],
  },
  projects: [
    {
      id: 1,
      title: "Nova AI Dashboard",
      role: "Lead Frontend Developer",
      description: "A premium AI-powered analytics dashboard with real-time data visualization, predictive modeling, and customizable reporting features.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "OmniStore E-commerce",
      role: "Full Stack Developer",
      description: "A highly scalable e-commerce platform with a headless CMS architecture, Stripe integration, and complex inventory management.",
      techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1950&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Pulse Social Network",
      role: "Backend Engineer",
      description: "A specialized social network for developers focusing on real-time messaging, code snippet sharing, and pair programming matching.",
      techStack: ["NestJS", "GraphQL", "MongoDB", "WebSockets", "Docker"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Senior Frontend Engineer",
      company: "TechNova Solutions",
      duration: "2022 - Present",
      description: "Led the frontend architecture transition to Next.js, improving page load speeds by 40%. Mentored junior developers and established CI/CD pipelines for automated testing."
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Innovate Web Agency",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple client projects ranging from custom CRMs to high-traffic e-commerce sites. Implemented robust REST APIs using Node.js and Express."
    },
    {
      id: 3,
      role: "Frontend Web Developer",
      company: "Creative Digital",
      duration: "2018 - 2020",
      description: "Built responsive, pixel-perfect user interfaces based on Figma designs. Collaborated closely with the design team to ensure smooth animations and premium user experience."
    }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com", icon: Twitter },
    { name: "Instagram", url: "https://instagram.com", icon: Instagram },
    { name: "Email", url: "mailto:hello@example.com", icon: Mail },
    { name: "Phone", url: "tel:+1234567890", icon: Phone }
  ]
};
