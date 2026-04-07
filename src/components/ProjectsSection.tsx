import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import clearioImg from "@/assets/cleario-tasks.jpg";
import researchlensImg from "@/assets/researchlens.png";
import pakJapanImg from "@/assets/pak-japan-battery.jpg";

const projects = [
  {
    title: "ClearioTasks",
    description: "A powerful task management web app designed for productivity. Features include task tracking, project organization, and smart productivity tools.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "#",
    live: "#",
    color: "from-primary/20 to-secondary/20",
    image: clearioImg,
  },
  {
    title: "ResearchLens AI",
    description: "Paper Insight AI is an AI-powered tool that helps users quickly analyze, summarize, and extract key insights from research papers.",
    tech: ["Python", "Machine Learning", "NLP", "Flask"],
    github: "#",
    live: "#",
    color: "from-accent/20 to-primary/20",
    image: researchlensImg,
  },
  {
    title: "Pak Japan Battery Website",
    description: "A professional business website for Pak Japan Battery — providing batteries and solar energy services across Pakistan.",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
    github: "#",
    live: "https://www.pakjapanbattery.com/",
    color: "from-secondary/20 to-neon-pink/20",
    image: pakJapanImg,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono text-secondary mb-2 tracking-widest uppercase">My Work</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 neon-text">Featured Projects</h3>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card-hover overflow-hidden group"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-2/5 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 z-10`} />
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="md:w-3/5 p-6 md:p-8 relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:neon-text transition-all">
                {project.title}
              </h4>
              <motion.div animate={{ rotate: hovered ? 45 : 0 }} transition={{ duration: 0.3 }}>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.github} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Github size={16} /> Code
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
