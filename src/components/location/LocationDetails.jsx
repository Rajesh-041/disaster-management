import { motion } from "framer-motion";

export default function LocationDetails({ locationData, error }) {
  if (error) {
    return (
      <div className="bg-alert-soft/10 border border-alert-soft/30 rounded-xl p-4 text-center">
        <p className="text-alert-soft font-medium text-sm">{error}</p>
      </div>
    );
  }

  if (!locationData) {
    return null;
  }

  const isDisasterProne = locationData.areaStatus === "Disaster-Prone";

  return (
    <div className="bg-bg-primary rounded-xl p-5 text-left" aria-live="polite">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-xl font-semibold text-text-primary">
          {locationData.name}
        </h3>
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 600, damping: 15 }}
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isDisasterProne
              ? "bg-alert-soft/15 text-alert-soft"
              : "bg-safe-green/15 text-safe-green"
          }`}
        >
          {isDisasterProne ? "Disaster-Prone" : "Safe Area"}
        </motion.span>
      </div>

      <div className="space-y-2">
        {[
          { label: "Type", value: locationData.type },
          { label: "Population", value: locationData.population },
          { label: "Weather", value: locationData.weather },
        ].map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center py-2 border-b border-border-light last:border-b-0"
          >
            <span className="text-text-muted text-sm">{item.label}</span>
            <span className="text-text-primary font-medium text-sm">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
