const myCountry = {
    country: "Norway",
    capital: "Oslo",
    language: "Norwegian",
    population: 5391369,
    neighbours: ["Finland", "Russia", "Sweden"],
};

console.log(
    myCountry.country +
        " has " +
        myCountry.population +
        " " +
        myCountry.language +
        "-speaking people, " +
        myCountry.neighbours.length +
        " neighbouring countries and a capital called " +
        myCountry.capital +
        "."
);

console.log(myCountry);

myCountry.population += 2000000;
console.log(myCountry);

myCountry["population"] -= 2000000;
console.log(myCountry);
