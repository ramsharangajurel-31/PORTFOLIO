import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaArrowUp,
  FaHome,
  FaBriefcase,
} from "react-icons/fa";
import { useEffect, useState } from "react";


export default function Footer({ darkMode, accentColor = "#6c63ff" }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Footer */}
      <footer
        className={`footer ${darkMode ? "dark" : "light"}`}
        style={{ "--accent": accentColor }}
      >
        <motion.div
          className="footer-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left */}
          <div className="footer-left">
            <h4>Ramsharan Gajurel</h4>
            <p>
              Frontend / Full Stack Developer <br />
              Building modern web experiences
            </p>
          </div>

          {/* Center */}
          <div className="footer-center">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Right */}
          <div className="footer-right">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:your@email.com">
              <FaEnvelope />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Ramsharan Gajurel. All rights reserved.
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      {/* Mobile Sticky Footer */}
      <div
        className={`mobile-footer ${darkMode ? "dark" : "light"}`}
        style={{ "--accent": accentColor }}
      >
        <a href="#home" aria-label="Home">
          <FaHome />
        </a>

        <a href="#projects" aria-label="Projects">
          <FaBriefcase />
        </a>

        <a href="#contact" aria-label="Contact">
          <FaEnvelope />
        </a>

        <button onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </>
  );
}
