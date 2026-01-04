import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ padding: "120px 8%", minHeight: "100vh" }}
    >
      {/* ================= Header ================= */}
      <motion.h1
        className="section-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="section-description"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I’m <strong>Ram Sharan</strong>, a passionate Full Stack Developer
        specializing in MERN stack. I love building interactive, modern, and
        responsive web applications that provide real value to users.
      </motion.p>

      {/* ================= Tech Stack ================= */}
      <motion.div
        className="tech-stack"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "40px" }}
      >
        <div className="tech-item"><FaReact size={40} color="#61DBFB" /><p>React</p></div>
        <div className="tech-item"><FaNodeJs size={40} color="#3C873A" /><p>Node.js</p></div>
        <div className="tech-item"><SiExpress size={40} color="#000" /><p>Express</p></div>
        <div className="tech-item"><SiMongodb size={40} color="#4DB33D" /><p>MongoDB</p></div>
        <div className="tech-item"><FaHtml5 size={40} color="#E34F26" /><p>HTML5</p></div>
        <div className="tech-item"><FaCss3Alt size={40} color="#1572B6" /><p>CSS3</p></div>
        <div className="tech-item"><FaJs size={40} color="#F7DF1E" /><p>JavaScript</p></div>
        <div className="tech-item"><FaGitAlt size={40} color="#F05032" /><p>Git</p></div>
      </motion.div>

      {/* ================= Timeline ================= */}
      <motion.div
        className="timeline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{ marginTop: "60px" }}
      >
        <h2 className="timeline-title">Education & Experience</h2>
        <div className="timeline-item">
          <span className="timeline-year">2020 - 2024</span>
          <div className="timeline-content">
            <h3>Bachelor’s in Computer Science</h3>
            <p>XYZ University, Kathmandu</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-year">2024 - Present</span>
          <div className="timeline-content">
            <h3>Frontend / Full Stack Developer</h3>
            <p>Working on MERN stack projects and freelance web apps</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
