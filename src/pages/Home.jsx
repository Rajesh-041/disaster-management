import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const taglines = [
  "Rapid Response, Lasting Impact.",
  "Strong Communities, Safer Tomorrows.",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % taglines.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <main className="space-y-16">
      <section
        className="flex flex-col justify-center items-center min-h-[40vh] px-5"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-heading text-4xl md:text-6xl font-bold text-text-primary leading-tight max-w-3xl"
          >
            &ldquo;{taglines[index]}&rdquo;
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-text-muted text-base md:text-lg max-w-xl leading-relaxed"
        >
          Providing calm clarity, immediate support, and clear pathways to
          recovery during high-stress situations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="/updates"
            className="bg-accent-warm text-white font-semibold py-3 px-6 rounded-lg text-sm tracking-wide
                       no-underline hover:bg-accent-hover transition-colors duration-200 shadow-sm"
          >
            View Updates
          </a>
          <a
            href="/resource-camp"
            className="bg-surface text-text-primary font-semibold py-3 px-6 rounded-lg text-sm tracking-wide
                       no-underline border border-border-light hover:border-accent-warm transition-colors duration-200"
          >
            Resource Camp
          </a>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { title: "Rapid Response", desc: "Immediate coordination and resource deployment to affected areas." },
          { title: "Community Support", desc: "Building resilient communities through education and preparedness." },
          { title: "Safe Recovery", desc: "Guiding families and infrastructure back to stability with care." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
            className="bg-surface border border-border-light rounded-2xl p-6 text-left shadow-sm"
          >
            <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
