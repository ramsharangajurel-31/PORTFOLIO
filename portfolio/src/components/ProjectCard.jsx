import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn">Live</a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn outline">Repo</a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
