function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const describeBosnia = describeCountry(
    "Bosnia and Herzegovina",
    3332593,
    "Sarajevo"
);
const describeNorway = describeCountry("Norway", 5391369, "Oslo");
const describeUruguay = describeCountry("Uruguay", 3518552, "Montevideo");

console.log(describeBosnia);
console.log(describeNorway);
console.log(describeUruguay);
