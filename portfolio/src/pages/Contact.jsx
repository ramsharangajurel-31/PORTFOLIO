import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError(true);
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_mypwxrd",
        "template_x3fso0c",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "jzKjTXT4omcN7PBze"
      )
      .then(() => {
        toast.success("Message sent successfully ");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong ");
        setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>Let’s build something great together</p>
        </div>

        <div className="contact-content">
          {/* Info */}
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope />
              <span>ramsharangajurelnp@email.com</span>
            </div>
            <div className="info-card">
              <FaPhoneAlt />
              <span>+977 9742448898</span>
            </div>
            <div className="info-card">
              <FaMapMarkerAlt />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Form */}
          <motion.form
            className={`contact-form ${error ? "shake" : ""}`}
            onSubmit={handleSubmit}
            animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={error && !form.name ? "error" : ""}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={error && !form.email ? "error" : ""}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={error && !form.message ? "error" : ""}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
