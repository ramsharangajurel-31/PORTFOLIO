import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";


export default function Footer() {
  const year = new Date().getFullYear();

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <footer className="footer">

        {/* Wave Animation */}
        <div className="footer-wave"></div>

        <div className="footer-container">

          {/* CTA */}
          <motion.div
            className="footer-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Let’s Build Something Great Together</h3>
            <a href="/contact" className="cta-btn">
              Contact Me
            </a>
          </motion.div>

          {/* Footer Content */}
          <div className="footer-content">

            {/* Left */}
            <div className="footer-left">
              <h4>Ramsharan Gajurel</h4>
              <p>Full Stack Developer (MERN)</p>
            </div>

            {/* Social */}
            <div className="footer-social">
              <a href="mailto:ramsharangajurelnp@email.com"><FaEnvelope /></a>
              <a href="https://github.com/ramsharangajurel-31" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="www.linkedin.com/in/ram-sharan-gajurel-023790401" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>

            {/* Right */}
            <div className="footer-right">
              <p>© {year} All Rights Reserved</p>
            </div>

          </div>
        </div>

        {/* Back To Top */}
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>

      </footer>
    </>
  );
}
