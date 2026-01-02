import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleNavItemClick = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <>
    
      <nav className="main-navbar">
        <div className="nav-container">
          <div className="nav-left">
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>
            <ul
              className={`nav-links ${menuOpen ? "active" : ""} ${
                closing ? "slide-up" : ""
              }`}
            >
              <li>
                <Link to="/" className="nav-link" onClick={handleNavItemClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  Projects
                </Link>
              </li>
               <li>
                <Link
                  to="/skills"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="nav-link"
                  onClick={handleNavItemClick}
                >
                  Contact
                </Link>
              </li>
            
            </ul>
          </div>
          <div className="nav-right">
            <FaSearch className="search-icon" />
              <Link to="/appointment" className="btn-appointment">Resume</Link>
          </div>
        </div>
      </nav>
    </>
  );
}