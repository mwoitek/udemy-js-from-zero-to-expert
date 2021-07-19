const country = 'Brazil';
let population = 214734970;
const averagePopulation = 33000000;
let populationDifference;

if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  populationDifference = averagePopulation - population;
  console.log(`${country}'s population is ${populationDifference} below average`);
}

population = 13000000;

if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  populationDifference = averagePopulation - population;
  console.log(`${country}'s population is ${populationDifference} below average`);
}

population = 130000000;

if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  populationDifference = averagePopulation - population;
  console.log(`${country}'s population is ${populationDifference} below average`);
}
