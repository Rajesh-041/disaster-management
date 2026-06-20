import { motion } from "framer-motion";

const tap = { scale: 0.97 };
const hover = { scale: 1.02, boxShadow: "0 4px 20px rgba(212,163,115,0.35)" };

export default function Button({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={hover}
      whileTap={tap}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`bg-accent-warm text-white font-semibold py-2.5 px-6 rounded-lg
                 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-sm md:text-base
                 tracking-wide shadow-sm ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
