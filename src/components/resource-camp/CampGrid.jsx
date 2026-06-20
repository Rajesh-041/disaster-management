import { AnimatePresence, motion } from "framer-motion";
import CampCard from "./CampCard";

export default function CampGrid({ camps, pulseKey }) {
  return (
    <div className="w-full max-w-5xl mx-auto" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={pulseKey}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -8 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {camps.map((camp) => (
            <CampCard key={camp.id} camp={camp} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
