import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiJsonwebtokens,
  SiNpm,
  SiNetlify,
  SiRender,
  SiMongoose,
  SiFramer,
} from "react-icons/si";

import { MdEmail, MdCloudUpload } from "react-icons/md";


const techs = [
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "Express.js", icon: <SiExpress color="#fff" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F0DB4F" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#264DE4" /> },
  { name: "Git & GitHub", icon: <FaGitAlt color="#F1502F" /> },
  { name: "Framer Motion", icon: <SiFramer color="#E91E63" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { name: "JWT", icon: <SiJsonwebtokens color="#00BFFF" /> },
  { name: "Mongoose", icon: <SiMongoose color="#800000" /> },
  { name: "Multer", icon: <MdCloudUpload color="#22c55e" /> },
  { name: "MongoDB Atlas", icon: <SiMongodb color="#47A248" /> },
  { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  { name: "Render", icon: <SiRender color="#46E3B7" /> },
  { name: "NPM", icon: <SiNpm color="#CB3837" /> },
  { name: "EmailJS", icon: <MdEmail color="#EA4335" /> },
];

export default function TechStack() {
  return (
    <motion.div
      className="tech-stack"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          className="tech-card"
          whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(0,217,255,0.6)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {tech.icon}
          <span className="tech-name">{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
