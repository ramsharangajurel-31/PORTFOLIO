import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";


export default function AboutTimeline() {
  return (
    <section className="about-timeline">
      <h3>Education & Experience</h3>

      <div className="timeline">
        <motion.span
          className="timeline-line"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <TimelineItem
          icon={<FaGraduationCap />}
          title="Bachelor in Computer Science"
          time="2020 – 2024"
        />

        <TimelineItem
          icon={<FaLaptopCode />}
          title="Frontend / Full Stack Developer"
          time="2024 – Present"
        />
      </div>
    </section>
  );
}

function TimelineItem({ icon, title, time }) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span className="timeline-icon">{icon}</span>

      <div className="timeline-content">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </motion.div>
  );
}
