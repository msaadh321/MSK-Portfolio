import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-glow" />
          <div className="absolute w-56 h-56 rounded-full bg-secondary/15 blur-[80px] animate-glow" style={{ animationDelay: "0.5s" }} />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="text-6xl sm:text-7xl font-bold tracking-tight">
                <span className="neon-text">M</span>
                <span className="text-foreground">S</span>
                <span className="neon-text">K</span>
              </div>
              {/* Glowing underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                className="h-0.5 mt-2 origin-left"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-neon)" }}
              />
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-48 h-1 rounded-full bg-muted overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
