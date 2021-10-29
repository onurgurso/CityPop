export const sortByPopulation = (array: []) => {
  return array.sort(
    (a: { population: number }, b: { population: number }) =>
      b.population - a.population
  );
};
