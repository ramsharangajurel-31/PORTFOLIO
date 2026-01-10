import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";



export default function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavItemClick = () => setMenuOpen(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          Ram Sharan
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={handleNavItemClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleNavItemClick}>About</Link></li>
          <li><Link to="/projects" onClick={handleNavItemClick}>Projects</Link></li>
          <li><Link to="/skills" onClick={handleNavItemClick}>Skills</Link></li>
          <li><Link to="/contact" onClick={handleNavItemClick}>Contact</Link></li>
        </ul>

        <div className="nav-right">
         <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
         </button>
         <a href="Ramsharan_CV.pdf" download className="btn-resume">
                  Resume
              </a>
        </div>
      </div>
    </motion.nav>
  );
}
