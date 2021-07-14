const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
mark.calcBMI();

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
john.calcBMI();

if (mark['BMI'] > john['BMI']) {
  console.log(
    mark['fullName'] +
      "'s BMI (" +
      mark['BMI'].toFixed(1) +
      ') is higher than ' +
      john['fullName'] +
      "'s (" +
      john['BMI'].toFixed(1) +
      ')!'
  );
} else {
  console.log(
    john['fullName'] +
      "'s BMI (" +
      john['BMI'].toFixed(1) +
      ') is higher than ' +
      mark['fullName'] +
      "'s (" +
      mark['BMI'].toFixed(1) +
      ')!'
  );
}
