import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const loop = () => {
      setPos((prev) => ({
        x: prev.x + (cursorRef.current.x - prev.x) * 0.15,
        y: prev.y + (cursorRef.current.y - prev.y) * 0.15,
      }));
      rafRef.current = requestAnimationFrame(loop);
    };

    const interactiveSelector = "a, button, input, textarea, [role='button'], .glass-card-hover";

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(interactiveSelector)) setIsHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(interactiveSelector)) setIsHovering(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border mix-blend-screen"
        animate={{
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
          borderColor: isHovering
            ? "hsl(var(--neon-blue) / 0.6)"
            : "hsl(var(--neon-purple) / 0.3)",
          boxShadow: isHovering
            ? "0 0 20px hsl(var(--neon-blue) / 0.4), 0 0 40px hsl(var(--neon-blue) / 0.15)"
            : "0 0 10px hsl(var(--neon-purple) / 0.2)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          transform: `translate(${pos.x - (isHovering ? 28 : 18)}px, ${pos.y - (isHovering ? 28 : 18)}px)`,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        animate={{
          width: isHovering ? 6 : 4,
          height: isHovering ? 6 : 4,
          opacity: isHovering ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          transform: `translate(${cursorRef.current.x - (isHovering ? 3 : 2)}px, ${cursorRef.current.y - (isHovering ? 3 : 2)}px)`,
          boxShadow: "0 0 8px hsl(var(--neon-purple) / 0.6)",
        }}
      />
    </>
  );
}
