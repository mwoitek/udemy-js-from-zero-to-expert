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

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const newMovements = sort ? movements.slice().sort((a, b) => a - b) : movements;
  newMovements.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = (account) => {
  account.balance = account.movements.reduce(
    (accumulator, movement) => accumulator + movement,
    0
  );
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = (account) => {
  const incomes = account.movements
    .filter((movement) => movement > 0)
    .reduce((accumulator, movement) => accumulator + movement, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter((movement) => movement < 0)
    .reduce((accumulator, movement) => accumulator + movement, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter((movement) => movement > 0)
    .map((deposit) => (account.interestRate * deposit) / 100)
    .filter((int) => int >= 1)
    .reduce((accumulator, int) => accumulator + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = (account) => {
  // Display movements
  displayMovements(account.movements);

  // Display balance
  calcDisplayBalance(account);

  // Display summary
  calcDisplaySummary(account);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', (e) => {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    const firstName = currentAccount.owner.split(' ')[0];
    labelWelcome.textContent = `Welcome back, ${firstName}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (account) => account.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    currentAccount.username !== receiverAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Clear input fields
    inputTransferTo.value = '';
    inputTransferAmount.value = '';
    inputTransferTo.blur();
    inputTransferAmount.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((movement) => movement >= 0.1 * amount)
  ) {
    // Add loan value
    currentAccount.movements.push(amount);

    // Clear input field
    inputLoanAmount.value = '';
    inputLoanAmount.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // Delete account
    const index = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );
    accounts.splice(index, 1);

    // Clear input fields
    inputCloseUsername.value = '';
    inputClosePin.value = '';
    inputCloseUsername.blur();
    inputClosePin.blur();

    // Hide UI
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
