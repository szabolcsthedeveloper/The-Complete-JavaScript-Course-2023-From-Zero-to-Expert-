'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let highscore = 0;
let remainingLives = 10;
let secretNumber = generateSecretNumber();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Reset the game when the "Again" button is clicked
document.querySelector('.btn.again').addEventListener('click', resetGame);
// Check the guess when the "Check" button is clicked
document.querySelector('.check').addEventListener('click', checkGuess);
function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
function resetGame() {
  secretNumber = generateSecretNumber();
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing fam...');
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.lives').textContent = remainingLives = 5;
  document.querySelector('.hero').textContent = 'Guess My Number!';
}
function checkGuess() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // Display message when no number is entered
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // Display message and update UI when the guess is correct
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.hero').textContent = '🎉 CONGRATS!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = ++highscore;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    // Display message and update UI when the guess is wrong
    displayMessage(
      guess > secretNumber ? '⬆️ Number too high!' : '⬇️ Number too low'
    );
    document.body.style.backgroundColor = '#800020';
    document.querySelector('.lives').textContent = --remainingLives;
    if (remainingLives === 0) {
      // When remaining lives reach 0, reset the game
      document.body.style.backgroundColor = '#990000';
      resetGame();
    }
  }
}
