import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-surface border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-2xl md:text-3xl font-bold text-text-primary tracking-wide"
        >
          Flash Rescue
        </motion.h1>
        <span className="text-text-muted text-sm hidden sm:block">
          Disaster Management &amp; Resilience
        </span>
      </div>
    </header>
  );
}
