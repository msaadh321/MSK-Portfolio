import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI / ML",
    skills: [
      { name: "Python", level: 65 },
      { name: "Machine Learning", level: 45 },
      { name: "NLP", level: 40 },
      { name: "Data Analysis", level: 55 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Prisma", level: 60 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 50 },
      { name: "Linux", level: 55 },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono text-secondary mb-2 tracking-widest uppercase">Expertise</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 neon-text">Skills & Technologies</h3>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.1 }}
              className="glass-card-hover p-6"
            >
              <h4 className="font-mono text-sm text-primary mb-6 uppercase tracking-wider">{category.title}</h4>
              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 0.4 + ci * 0.1 + si * 0.08, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
