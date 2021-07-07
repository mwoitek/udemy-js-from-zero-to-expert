const continent = "South America";
const country = "Brazil";
const language = "Portuguese";
let population = 214734970;

// If your country split in half, and each half would contain half the
// population, then how many people would live in each half?
const halfPopulation = population / 2;
console.log(halfPopulation);

// Increase the population of your country by 1 and log the result to the
// console.
population += 1;
console.log(population);

// Finland has a population of 6 million. Does your country have more people
// than Finland?
const populationFinland = 6000000;
const morePeople = population > populationFinland;
console.log(morePeople);

// The average population of a country is 33 million people. Does your country
// have less people than the average country?
const averagePopulation = 33000000;
const lessPeople = population < averagePopulation;
console.log(lessPeople);

// Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11
// million people speak Portuguese'.
const description =
    country +
    " is in " +
    continent +
    ", and its " +
    population +
    " people speak " +
    language;
console.log(description);
