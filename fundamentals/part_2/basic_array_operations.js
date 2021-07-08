const neighbours = ["Finland", "Russia", "Sweden"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country");
}

const idx = neighbours.findIndex((neighbour) => neighbour === "Sweden");
neighbours[idx] = "Republic of Sweden";
console.log(neighbours);
