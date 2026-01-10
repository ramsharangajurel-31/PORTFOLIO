import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/style/style.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer darkMode={darkMode} toggleTheme={toggleTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
