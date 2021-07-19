const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + 4 * dogAge));
  const agesAtLeast18 = humanAges.filter((humanAge) => humanAge >= 18);
  const agesSum = agesAtLeast18.reduce(
    (accumulator, humanAge) => accumulator + humanAge,
    0
  );
  return agesSum / agesAtLeast18.length;
};

console.log('Test Data 1');
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log('Test Data 2');
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
