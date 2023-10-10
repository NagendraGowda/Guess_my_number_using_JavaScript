'use strict';

let numbers = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = numbers;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number';
    displayMessage(' ⛔ No Number');
  } else if (guess == numbers) {
    //document.querySelector('.message').textContent = 'Correct Number ✌';
    displayMessage('Correct Number 🏆');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== numbers) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > numbers ? 'Too High' : 'Too Low';
      displayMessage(guess > numbers ? ' 📈 Too High' : ' 📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > numbers) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numbers = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
