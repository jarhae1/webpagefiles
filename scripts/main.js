var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var header = document.querySelector('h1');
var number = document.querySelector('.test');


var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;
guessField.focus();



function checkGuess() {
  var winningMessage = "You Win!!!";
  var wrongMessage = "Wrong";
  var tooHighMessage = "You guessed too high. Try Again";
  var tooLowMessage = "You guessed too low. Try Again";
  var gameOverMessage = "!!!GAME OVER!!!"
  var userGuess = Math.floor(Number(guessField.value));
  lowOrHi.textContent = randomNumber;
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = winningMessage;
    lastResult.style.backgroundColor = 'green';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = gameOverMessage;
    setGameOver();
  } else{
    lastResult.textContent = wrongMessage;
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = tooLowMessage;
    }else if (userGuess > randomNumber) {
      lowOrHi.textContent = tooHighMessage;
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
}

function resetGame(){
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i =0; i<resetParas.length; i++){
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random()*100)+1;


}

guessSubmit.addEventListener('click', checkGuess);
