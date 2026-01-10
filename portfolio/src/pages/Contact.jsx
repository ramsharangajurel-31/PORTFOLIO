import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactSocial from "../components/ContactSocial";



export default function Contact() {
  return (
    <section id = "contact" className="contact-page">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-layout">
        <ContactInfo />
        <ContactForm />
      </div>

      <ContactSocial />
    </section>
  );
}
