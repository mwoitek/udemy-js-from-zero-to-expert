const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (100 * population) / worldPopulation;
}

let percentageChina = percentageOfWorld1(1441);
let percentageFinland = percentageOfWorld1(6);
let percentagePortugal = percentageOfWorld1(11);

console.log(percentageChina);
console.log(percentageFinland);
console.log(percentagePortugal);

const percentageOfWorld2 = function (population) {
  return (100 * population) / worldPopulation;
};

percentageChina = percentageOfWorld2(1441);
percentageFinland = percentageOfWorld2(6);
percentagePortugal = percentageOfWorld2(11);

console.log(percentageChina);
console.log(percentageFinland);
console.log(percentagePortugal);
