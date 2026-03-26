import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const timeline = [
  {
    type: "education" as const,
    title: "BS Artificial Intelligence",
    org: "Bahria University",
    period: "2023 – Present",
    description: "Pursuing a degree in AI with focus on machine learning, data science, and software engineering.",
  },
  {
    type: "work" as const,
    title: "Technical Head",
    org: "Climbart Tech",
    period: "2024 – Present",
    description: "Leading the technical team in developing innovative web solutions and managing project architecture.",
  },
  {
    type: "work" as const,
    title: "Director",
    org: "SkillUpPath",
    period: "2024 – Present",
    description: "Directing strategy and operations for a platform focused on skill development and learning resources.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono text-secondary mb-2 tracking-widest uppercase">Journey</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 neon-text">Education & Experience</h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 animate-glow" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="glass-card-hover p-6">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.type === "education" ? (
                        <GraduationCap className="w-4 h-4 text-secondary" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-primary" />
                      )}
                      <span className="text-xs font-mono text-muted-foreground uppercase">{item.period}</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="text-sm text-primary mb-2">{item.org}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
