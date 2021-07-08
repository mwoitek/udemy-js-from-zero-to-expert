const worldPopulation = 7900;

const percentageOfWorld3 = (population) => (100 * population) / worldPopulation;

const percentageChina = percentageOfWorld3(1441);
const percentageFinland = percentageOfWorld3(6);
const percentagePortugal = percentageOfWorld3(11);

console.log(percentageChina);
console.log(percentageFinland);
console.log(percentagePortugal);
