class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The speed increased to ${this.speed} km/h.`);
  }

  break() {
    this.speed -= 5;
    console.log(`The speed decreased to ${this.speed} km/h.`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(newSpeedUS) {
    this.speed = 1.6 * newSpeedUS;
  }
}

const ford = new CarCl('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();
console.log(`The current speed in mi/h is ${ford.speedUS}.`);

ford.speedUS = 50;
console.log(`The current speed in mi/h is ${ford.speedUS}.`);
ford.break();
ford.break();
