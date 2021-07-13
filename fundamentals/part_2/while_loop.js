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

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages3);
