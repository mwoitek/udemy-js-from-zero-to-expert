const myCountry = {
    country: "Norway",
    capital: "Oslo",
    language: "Norwegian",
    population: 5391369,
    neighbours: ["Finland", "Russia", "Sweden"],
    describe: function () {
        console.log(
            this.country +
                " has " +
                this.population +
                " " +
                this.language +
                "-speaking people, " +
                this.neighbours.length +
                " neighbouring countries and a capital called " +
                this.capital +
                "."
        );
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
