const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The speed increased to ${this.speed} km/h.`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`The speed decreased to ${this.speed} km/h.`);
};

const bmw = new Car('BMW', 120);
console.log('BMW');
bmw.break();
bmw.break();
bmw.break();
bmw.break();

const mercedes = new Car('Mercedes', 95);
console.log('Mercedes');
mercedes.break();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
