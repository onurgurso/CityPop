export const sortByPopulation = (array: []) => {
  return array.sort(
    (a: { population: number }, b: { population: number }) =>
      b.population - a.population
  );
};

export const numberFormatter = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
