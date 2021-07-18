'use strict';

// Selecting elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceElement = document.querySelector('.dice');

const currentScoreElement0 = document.querySelector('#current--0');
const currentScoreElement1 = document.querySelector('#current--1');
const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.querySelector('#score--1');

const playerElement0 = document.querySelector('.player--0');
const playerElement1 = document.querySelector('.player--1');

// Starting conditions
diceElement.classList.add('hidden');
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;

let activePlayer = 0;
let currentScore = 0;
const scores = [0, 0];

// Dice rolling functionality
btnRoll.addEventListener('click', () => {
  // Random dice roll
  const dice = Math.trunc(6 * Math.random()) + 1;

  // Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 1 ? 0 : 1;
    currentScore = 0;
    playerElement0.classList.toggle('player--active');
    playerElement1.classList.toggle('player--active');
  }
});
