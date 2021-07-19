const calcAverageHumanAge = (ages) =>
  ages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + 4 * dogAge))
    .filter((humanAge) => humanAge >= 18)
    .reduce((accumulator, humanAge, i) => (i * accumulator + humanAge) / (i + 1), 0);

console.log('Test Data 1');
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log('Test Data 2');
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
