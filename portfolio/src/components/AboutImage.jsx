import { motion } from "framer-motion";
import profile from "../assets/herosection.jpeg";

export default function AboutImage() {
  return (
    <motion.div
      className="about-image-wrapper"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src={profile} alt="Ramsharan Gajurel" />
    </motion.div>
  );
}
