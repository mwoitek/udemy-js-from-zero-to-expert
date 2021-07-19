const populations = [
  3.3, // Bosnia
  215, // Brazil
  5.4, // Norway
  3.5, // Uruguay
];

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

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages);
console.log(percentages2);
