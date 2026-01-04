import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function TechStack() {
  return (
    <>
      <h3 className="section-heading">Tech Stack</h3>
      <div className="tech-stack">
        <div className="tech-item"><FaReact /> React</div>
        <div className="tech-item"><FaNodeJs /> Node.js</div>
        <div className="tech-item"><SiExpress /> Express</div>
        <div className="tech-item"><SiMongodb /> MongoDB</div>
      </div>
    </>
  );
}
