import TechStack from "./TechStack";
import SkillCard from "./SkillCard";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "HTML & CSS", level: 95 },
  { name: "Git & GitHub", level: 85 },
];

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <TechStack />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
