import { locations } from "../data/locations";

export function useLocationInfo(selectedLocation) {
  if (!selectedLocation) {
    return { locationData: null, error: null };
  }

  const locationData = locations.find((l) => l.name === selectedLocation);

  if (!locationData) {
    return { locationData: null, error: "No information available for the selected location." };
  }

  return { locationData, error: null };
}
