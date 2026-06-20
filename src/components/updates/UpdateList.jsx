import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export default function UpdateList({ updates }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div variants={listVariants} initial="hidden" animate="visible">
        {updates.map((item) => (
          <motion.div key={item.id} variants={itemVariants} className="mb-4">
            <div className="bg-surface border border-border-light rounded-2xl p-5 shadow-sm text-left">
              <div className="flex items-start gap-3">
                <span className="text-accent-warm text-lg mt-0.5">&#9733;</span>
                <p className="text-text-primary text-sm md:text-base leading-relaxed">
                  {item.text}{" "}
                  <span className="text-accent-warm font-semibold">
                    {item.highlight}
                  </span>{" "}
                  {item.suffix}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
