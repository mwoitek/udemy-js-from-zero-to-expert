const worldPopulation = 7900;
function percentageOfWorld1(population) {
    return (100 * population) / worldPopulation;
}

const describePopulation = (country, population) =>
    country +
    " has " +
    population +
    " million people, which is about " +
    percentageOfWorld1(population) +
    "% of the world.";

console.log(describePopulation("China", 1441));
console.log(describePopulation("Finland", 6));
console.log(describePopulation("Portugal", 11));
