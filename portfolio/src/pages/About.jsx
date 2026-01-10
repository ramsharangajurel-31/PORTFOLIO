import React from "react";
import AboutBanner from "../components/aboutbanner";
import AboutImage from "../components/AboutImage";
import AboutStats from "../components/AbboutStats";
import AboutTimeline from "../components/AboutTimeLine";
import ScrollProgress from "../components/ScrollProgress";




export default function About() {
  return (
    <section className="about-page">
      
      <div className="about-layout">
        <ScrollProgress />
        <AboutBanner />
        <AboutImage />
      </div>

      <AboutStats />
      <AboutTimeline />
    </section>
  );
}
