import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Navbar() {
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
          Ramsharan
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
          <FaSearch className="search-icon" />
          <Link to="/resume" className="btn-resume">Resume</Link>
        </div>
      </div>
    </motion.nav>
  );
}
