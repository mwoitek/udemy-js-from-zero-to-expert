const checkDogs = (dogsJulia, dogsKate) => {
  let newDogsJulia = dogsJulia.slice(1);
  newDogsJulia.splice(-2, 2);

  const dogsJuliaKate = newDogsJulia.concat(dogsKate);
  dogsJuliaKate.forEach((dogAge, i) => {
    const end =
      dogAge >= 3 ? `an adult, and it is ${dogAge} years old` : 'still a puppy 🐶';
    console.log(`Dog number ${i + 1} is ${end}`);
  });
};

console.log('Test Data 1');
let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);

console.log('Test Data 2');
dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];
checkDogs(dogsJulia, dogsKate);
