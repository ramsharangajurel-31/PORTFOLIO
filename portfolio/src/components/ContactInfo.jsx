import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  const info = [
    { icon: <FaEnvelope />, label: "Email", value: "ramsharangajurelnp@example.com" },
    { icon: <FaPhone />, label: "Phone", value: "+977 9742448898" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Kathmandu, Nepal" },
  ];

  return (
    <motion.div
      className="contact-info"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {info.map((item, index) => (
        <div key={index} className="info-card">
          <div className="icon">{item.icon}</div>
          <div>
            <h4>{item.label}</h4>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
