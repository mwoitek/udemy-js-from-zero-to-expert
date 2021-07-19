const country = 'Brazil';
let population = 214734970;
const averagePopulation = 33000000;

console.log(
  population > averagePopulation
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);

population = 13000000;

console.log(
  population > averagePopulation
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);

population = 130000000;

console.log(
  population > averagePopulation
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);
