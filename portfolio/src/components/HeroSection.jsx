import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from '../assets/herosection.jpg';
import { Typewriter } from 'react-simple-typewriter';
import {useNavigate} from 'react-router-dom';




const HeroSection = () => {
  // Delay for hero animations (after Navbar)
  const heroTransition = { delay: 0.9, duration: 2 };
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={heroTransition}
      >
        <h4>Hello, I’m</h4>
        <h1>
          Ram Sharan <span>Gajurel</span>
        </h1>

        <div className="role-wrapper">
          <h2 className="hero-role">
            <Typewriter
    words={['Full Stack Developer', 'Frontend Developer']}
    loop={false}          // set true if you want it to repeat
    cursor
    cursorStyle="|"
    typeSpeed={80}
  deleteSpeed={50}        // typing speed in ms
  />
             <span className="underline"></span></h2> 
          <span className="role-badge">Available for Freelance</span>
        </div>

        <p>
          I build modern, scalable, and responsive web applications using React, Node.js, and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="/contact" className="btn primary">Hire Me</a>
          <a href="/Ramsharan_CV.pdf" target="_blank" rel="noopener" className="btn outline">Download CV</a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/ramsharangajurel-31" target="_blank" rel="noopener">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/ramsharan-gajurel-0a704a256/" target="_blank" rel="noopener">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }} // Slightly after content
      >
        <img src={heroImage} alt="Ramsharan Gajurel" />
      </motion.div>

   
    </section>
  );
};

export default HeroSection;
