import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function AboutStats() {
  const stats = [
    { value: 15, suffix: "+", label: "Projects Completed" },
    { value: 1, suffix: "+", label: "Years Experience" },
    { value: 10, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <motion.section
      className="about-stats"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </motion.section>
  );
}

/* ===== Single Stat Card ===== */
function StatCard({ stat }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1200;
    const incrementTime = 20;
    const increment = end / (duration / incrementTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="stat-card">
      <h3>
        {count}
        {stat.suffix}
      </h3>
      <p>{stat.label}</p>
    </div>
  );
}
