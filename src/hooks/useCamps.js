import { useState, useCallback } from "react";
import { initialCamps, generateCampStats } from "../data/camps";

export function useCamps() {
  const [camps, setCamps] = useState(initialCamps);

  const refresh = useCallback(() => {
    setCamps((prev) => prev.map((camp) => generateCampStats(camp.id)));
  }, []);

  return { camps, refresh };
}
