import ProjectCard from "./ProjectCard";
import PortfolioImg from "../assets/portfolio.png"

// Sample project data
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills with animations and dark mode.",
    tech: ["React", "Framer Motion", "CSS"],
    image: {PortfolioImg},
    live: "https://yourportfolio.com",
    repo: "https://github.com/username/portfolio"
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce app with user authentication, product listing, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/assets/projects/ecommerce.png",
    live: "https://meddical.netlify.app/",
    repo: "https://github.com/ramsharangajurel-31/MEDDICAL_INTERN_WEBSITE"
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with markdown editor, authentication, and dynamic routing.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/assets/projects/blog.png",
    live: "https://minionlinebookstore.netlify.app/",
    repo: "https://github.com/ramsharangajurel-31/Book_Store"
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
