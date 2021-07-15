const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, playerName] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${playerName}`);
}

const calcAverage = (arr) => {
  let sum = 0;
  for (const arrElement of arr) {
    sum += arrElement;
  }
  return sum / arr.length;
};
const averageOdd = calcAverage(Object.values(game.odds));
console.log(averageOdd);

for (const propertyName of Object.keys(game.odds)) {
  const oddDescription = !game[propertyName]
    ? 'draw'
    : `victory ${game[propertyName]}`;
  console.log(`Odd of ${oddDescription}: ${game.odds[propertyName]}`);
}

const scorers = {};
for (const [i, playerName] of game.scored.entries()) {
  if (scorers[playerName]) continue;
  let numberGoals = 1;
  for (let j = i + 1; j < game.scored.length; j++) {
    numberGoals += game.scored[j] === playerName ? 1 : 0;
  }
  scorers[playerName] = numberGoals;
}
console.log(scorers);
