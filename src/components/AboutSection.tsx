import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Globe, Mic, Camera } from "lucide-react";

const interests = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Globe, label: "Web Development" },
  { icon: Mic, label: "Public Speaking" },
  { icon: Camera, label: "Photography" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono text-secondary mb-2 tracking-widest uppercase">About Me</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 neon-text">Who I Am</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a <span className="text-foreground font-semibold">BS Artificial Intelligence</span> student at Bahria University, 
              passionate about technology, innovation, and problem-solving. I love building digital experiences 
              that make a difference.
            </p>

            <div className="space-y-3">
              {[
                { role: "Technical Head", org: "Climbart Tech" },
                { role: "Director", org: "SkillUpPath" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="glass-card-hover p-4 flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                  <div>
                    <p className="font-semibold text-foreground">{item.role}</p>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Interests</p>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card-hover p-5 text-center group cursor-default"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-secondary transition-colors" />
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
