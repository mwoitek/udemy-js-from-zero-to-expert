const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  const innerArray = listOfNeighbours[i];
  for (let j = 0; j < innerArray.length; j++) {
    console.log(`Neighbour: ${innerArray[j]}`);
  }
}
