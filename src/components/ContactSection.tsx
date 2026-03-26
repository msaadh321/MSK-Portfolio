import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-mono text-secondary mb-2 tracking-widest uppercase">Get In Touch</h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 neon-text">Contact Me</h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:contact@saadkhan.dev", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 glass-card-hover flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Your Email" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
            />

            <button
              type="submit"
              disabled={submitted}
              className="w-full py-3 rounded-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 flex items-center justify-center gap-2"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-neon)" }}
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} /> Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
