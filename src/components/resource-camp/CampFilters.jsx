import Select from "../ui/Select";

const placeOptions = [
  { value: "place1", label: "Place 1" },
  { value: "place2", label: "Place 2" },
  { value: "place3", label: "Place 3" },
];

const areaOptions = [
  { value: "area1", label: "Area 1" },
  { value: "area2", label: "Area 2" },
  { value: "area3", label: "Area 3" },
  { value: "area4", label: "Area 4" },
  { value: "area5", label: "Area 5" },
  { value: "area6", label: "Area 6" },
  { value: "area7", label: "Area 7" },
];

export default function CampFilters({
  selectedPlace,
  setSelectedPlace,
  selectedArea,
  setSelectedArea,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-2">
      <Select
        label="Select Place"
        id="places"
        value={selectedPlace}
        onChange={setSelectedPlace}
        options={placeOptions}
      />
      <Select
        label="Select Area"
        id="areas"
        value={selectedArea}
        onChange={setSelectedArea}
        options={areaOptions}
      />
    </div>
  );
}
