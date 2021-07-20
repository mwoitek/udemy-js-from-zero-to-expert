const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((dog) => {
  dog.recommendedFood = 28 * dog.weight ** 0.75;
});

const computeLowerBound = (dog) => 0.9 * dog.recommendedFood;

const computeUpperBound = (dog) => 1.1 * dog.recommendedFood;

const eatTooLittle = (dog) => dog.curFood < computeLowerBound(dog);

const eatOkAmount = (dog) =>
  dog.curFood >= computeLowerBound(dog) && dog.curFood <= computeUpperBound(dog);

const eatTooMuch = (dog) => dog.curFood > computeUpperBound(dog);

const findDogByOwner = (owner) => dogs.find((dog) => dog.owners.includes(owner));

// console.log(findDogByOwner('Alice'));
// console.log(findDogByOwner('Matilda'));
// console.log(findDogByOwner('Sarah'));

const dogSarah = findDogByOwner('Sarah');
if (eatTooLittle(dogSarah)) {
  console.log("Sarah's dog is eating too little!");
} else if (eatOkAmount(dogSarah)) {
  console.log("Sarah's dog is eating an OK amount!");
} else {
  console.log("Sarah's dog is eating too much!");
}

const createOwnersArr = (eatingFunc) =>
  dogs.filter(eatingFunc).flatMap((dog) => dog.owners);

const ownersEatTooLittle = createOwnersArr(eatTooLittle);
const ownersEatTooMuch = createOwnersArr(eatTooMuch);

const printOwnersStr = (ownersArr, end) => {
  const begin = ownersArr.join(' and ');
  console.log(`${begin}'s dogs eat too ${end}!`);
};

printOwnersStr(ownersEatTooLittle, 'little');
printOwnersStr(ownersEatTooMuch, 'much');

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

console.log(dogs.some(eatOkAmount));

const dogsOkAmount = dogs.filter(eatOkAmount);
console.log(dogsOkAmount);

const dogsCopy = dogs.slice();
dogsCopy.sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood);
console.log(dogsCopy);
