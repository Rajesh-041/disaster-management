import { useState } from "react";
import { useCamps } from "../hooks/useCamps";
import CampFilters from "../components/resource-camp/CampFilters";
import CampGrid from "../components/resource-camp/CampGrid";
import Button from "../components/ui/Button";
import Footer from "../components/layout/Footer";

export default function ResourceCamp() {
  const [selectedPlace, setSelectedPlace] = useState("place1");
  const [selectedArea, setSelectedArea] = useState("area1");
  const { camps, refresh } = useCamps();
  const [pulseKey, setPulseKey] = useState(0);

  const handleRefresh = () => {
    refresh();
    setPulseKey((k) => k + 1);
  };

  return (
    <main className="space-y-8">
      <div className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
          Resource Camp
        </h2>
        <p className="text-text-muted text-sm">
          Monitor resource distribution across camp locations
        </p>
      </div>

      <div className="bg-surface border border-border-light rounded-2xl p-6 shadow-sm max-w-3xl mx-auto">
        <CampFilters
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
        />
        <div className="pt-2 flex justify-center">
          <Button onClick={handleRefresh}>Refresh Data</Button>
        </div>
      </div>

      <CampGrid camps={camps} pulseKey={pulseKey} />
      <Footer />
    </main>
  );
}
