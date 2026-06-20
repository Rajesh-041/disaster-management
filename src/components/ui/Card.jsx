import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`bg-surface text-text-primary rounded-2xl p-6 shadow-sm border border-border-light ${className}`}
    >
      {children}
    </motion.div>
  );
}
