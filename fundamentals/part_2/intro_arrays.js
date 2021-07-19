const populations = [
  3.3, // Bosnia
  215, // Brazil
  5.4, // Norway
  3.5, // Uruguay
];

console.log(populations.length === 4);

const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (100 * population) / worldPopulation;
}

const percentages = [
  percentageOfWorld1(3.3), // Bosnia
  percentageOfWorld1(215), // Brazil
  percentageOfWorld1(5.4), // Norway
  percentageOfWorld1(3.5), // Uruguay
];

console.log(percentages[0]);
console.log(percentages[1]);
console.log(percentages[2]);
console.log(percentages[3]);
