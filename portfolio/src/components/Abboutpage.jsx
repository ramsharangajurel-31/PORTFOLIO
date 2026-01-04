import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/herosection.jpeg";

export default function Aboutpage() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profileImg} alt="Ramsharan Gajurel" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h5 className="about-subtitle">About Me</h5>
          <h2 className="about-title">
            Full Stack Developer based in Nepal
          </h2>

          <p className="about-text">
            I’m <strong>Ramsharan Gajurel</strong>, a passionate Full Stack Developer
            focused on building modern, scalable, and user-friendly web applications.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
