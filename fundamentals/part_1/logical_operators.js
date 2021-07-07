let country = "Brazil";
let isIsland = false;
let language = "Portuguese";
let population = 214734970;

let languageTest = language === "English";
let populationTest = population < 50000000;

if (languageTest && populationTest && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

country = "Fictional Country";
language = "English";
population = 40000000;

languageTest = language === "English";
populationTest = population < 50000000;

if (languageTest && populationTest && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}
