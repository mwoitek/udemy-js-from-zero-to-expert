'use strict';

// Selecting elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const currentScoreElement0 = document.querySelector('#current--0');
const currentScoreElement1 = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');

const playerElement0 = document.querySelector('.player--0');
const playerElement1 = document.querySelector('.player--1');

const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.querySelector('#score--1');

// Starting conditions
let activePlayer;
let currentScore;
let playing;
let scores;

const init = () => {
  playing = true;

  activePlayer = 0;
  playerElement0.classList.add('player--active');
  playerElement0.classList.remove('player--winner');
  playerElement1.classList.remove('player--active', 'player--winner');

  scores = [0, 0];
  scoreElement0.textContent = 0;
  scoreElement1.textContent = 0;

  currentScore = 0;
  currentScoreElement0.textContent = 0;
  currentScoreElement1.textContent = 0;

  diceElement.classList.add('hidden');
};

init();

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  currentScore = 0;
  playerElement0.classList.toggle('player--active');
  playerElement1.classList.toggle('player--active');
};

// Dice rolling functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // Random dice roll
    const dice = Math.trunc(6 * Math.random()) + 1;

    // Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    // Check if player's score >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
