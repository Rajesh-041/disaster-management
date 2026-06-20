import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocationInfo } from "../hooks/useLocationInfo";
import LocationSelect from "../components/location/LocationSelect";
import LocationDetails from "../components/location/LocationDetails";
import Button from "../components/ui/Button";

export default function LocationInfo() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { locationData, error } = useLocationInfo(
    submitted ? selectedLocation : ""
  );

  const handleGetInfo = () => {
    setSubmitted(true);
  };

  return (
    <main className="space-y-8">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
          Location Intelligence
        </h2>
        <p className="text-text-muted text-sm">
          View detailed information about regions and their disaster status
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-surface border border-border-light rounded-2xl p-6 shadow-sm">
        <LocationSelect
          selectedLocation={selectedLocation}
          setSelectedLocation={(val) => {
            setSelectedLocation(val);
            setSubmitted(false);
          }}
        />
        <div className="flex justify-center pt-2">
          <Button onClick={handleGetInfo}>Get Info</Button>
        </div>

        <AnimatePresence mode="wait">
          {submitted && (
            <motion.div
              key={selectedLocation || "error"}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-5"
            >
              <LocationDetails
                locationData={locationData}
                error={
                  !selectedLocation
                    ? "Please select a location!"
                    : error
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
