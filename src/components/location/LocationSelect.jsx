import Select from "../ui/Select";
import { locations } from "../../data/locations";

const locationOptions = [
  { value: "", label: "Select a location" },
  ...locations.map((l) => ({ value: l.name, label: l.name })),
];

export default function LocationSelect({
  selectedLocation,
  setSelectedLocation,
}) {
  return (
    <div className="mb-2">
      <Select
        label="Select a Location"
        id="locationDropdown"
        value={selectedLocation}
        onChange={setSelectedLocation}
        options={locationOptions}
      />
    </div>
  );
}
