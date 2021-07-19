'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelBalance = document.querySelector('.balance__value');
const labelDate = document.querySelector('.date');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelSumOut = document.querySelector('.summary__value--out');
const labelTimer = document.querySelector('.timer');
const labelWelcome = document.querySelector('.welcome');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnClose = document.querySelector('.form__btn--close');
const btnLoan = document.querySelector('.form__btn--loan');
const btnLogin = document.querySelector('.login__btn');
const btnSort = document.querySelector('.btn--sort');
const btnTransfer = document.querySelector('.form__btn--transfer');

const inputClosePin = document.querySelector('.form__input--pin');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputTransferTo = document.querySelector('.form__input--to');
