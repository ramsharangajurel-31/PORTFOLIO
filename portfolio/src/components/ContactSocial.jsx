import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSocial() {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/ramsharangajurel-31" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ram-sharan-gajurel-0a704a256/" },
    // { icon: <FaTwitter />, link: "https://twitter.com/username" },
  ];

  return (
    <motion.div
      className="contact-social"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
}
