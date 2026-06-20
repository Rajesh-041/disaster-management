import { useRef, useEffect } from "react";
import { motion, animate } from "framer-motion";

function useCountUp(value) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const controls = animate(0, value, {
      duration: 0.6,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v);
      },
    });
    return controls.stop;
  }, [value]);
  return ref;
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function StatLine({ label, value, unit }) {
  const ref = useCountUp(value);
  return (
    <div className="flex justify-between items-center py-2 border-b border-border-light last:border-b-0">
      <span className="text-text-muted text-sm">{label}</span>
      <span className="text-text-primary font-semibold text-sm tabular-nums">
        <span ref={ref}>{value}</span> {unit}
      </span>
    </div>
  );
}

export default function CampCard({ camp }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="bg-surface border border-border-light rounded-2xl p-5 shadow-sm text-left"
    >
      <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
        {camp.name}
      </h3>
      <StatLine label="People Count" value={camp.peopleCount} unit="" />
      <StatLine label="Food Required" value={camp.foodRequirement} unit="meals" />
      <StatLine label="Water Bottles" value={camp.waterBottleRequirement} unit="bottles" />
      <StatLine label="Cloth Sets" value={camp.clothRequirement} unit="sets" />
    </motion.div>
  );
}
