export function generateCampStats(id) {
  const peopleCount = Math.floor(Math.random() * 300) + 50;
  const foodRequirement = peopleCount + Math.floor(Math.random() * 100);
  const waterBottleRequirement = Math.floor(Math.random() * 500) + 100;
  const clothRequirement = Math.floor(Math.random() * 200) + 50;

  return {
    id,
    name: `Camp ${id}`,
    peopleCount,
    foodRequirement,
    waterBottleRequirement,
    clothRequirement,
  };
}

export const initialCamps = [1, 2, 3].map(generateCampStats);
