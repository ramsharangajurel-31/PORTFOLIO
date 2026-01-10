import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function SkillCard({ skill = { name: "Unknown", level: 0 } }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView || skill.level == null) return; // prevent crash if skill.level undefined

    let start = 0;
    const end = skill.level;
    const duration = 800;
    const incrementTime = 15;
    const increment = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setProgress(end);
        clearInterval(timer);
      } else {
        setProgress(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, skill.level]);

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="skill-header">
        <h4>{skill.name || "Unknown"}</h4>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="skill-percent">{progress}%</span>
    </motion.div>
  );
}
