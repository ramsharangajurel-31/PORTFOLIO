import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <motion.div
      className="about-banner"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <p>
        I’m <strong>Ramsharan Gajurel</strong>, a passionate
        <strong> Full Stack Developer</strong> specializing in MERN stack.
      </p>
      <p>
        I enjoy building modern, scalable, and user-focused web applications
        with clean UI, smooth animations, and maintainable code.
      </p>
    </motion.div>
  );
}
