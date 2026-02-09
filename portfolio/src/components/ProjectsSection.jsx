import ProjectCard from "./ProjectCard";
import PortfolioImg from "../assets/portfolio.png";
import HospitalImg from "../assets/hospital.png";
import BookImg from "../assets/bookstore.png";
// Sample project data
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills with animations and dark mode.",
    tech: ["React", "Framer Motion", "CSS"],
    image: PortfolioImg,
    live: "https://yourportfolio.com",
    repo: "https://github.com/username/portfolio",
  },
  {
    title: "Hospital Webpage",
    description:
      "Full-stack  app with user authentication, book appointment, get news as well as other various features.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: HospitalImg,
    live: "https://meddical.netlify.app/",
    repo: "https://github.com/ramsharangajurel-31/MEDDICAL_INTERN_WEBSITE",
  },
  {
    title: "Online BookStore",
    description:
      "A modern  platform to buy books as well as read bokks / admin Panel features to login up/ siggn up",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vite", "Multer", "Auth"],
    image: BookImg,
    live: "https://minionlinebookstore.netlify.app/",
    repo: "https://github.com/ramsharangajurel-31/Book_Store",
  },
  {
    title: "Mini Job Portal",
    description:
      "Mini Job Portal is a web application that connects job seekers with employers. It features job listings with details, search and filter functionality, job bookmarking, and pagination for easy navigation.",
    tech: ["React", "CSS", "React Icons", "Framer Motion"],
    image: BookImg,
    live: "https://minijobportal.netlify.app/",
    repo: "https://github.com/ramsharangajurel-31/React-Task",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </section>
  );
}
