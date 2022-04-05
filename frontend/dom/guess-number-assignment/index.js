/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let newGameBtn = document.querySelector('.btn-warning');
let randomNumber = Math.floor(Math.random() * 10) + 1;
let message = document.getElementsByClassName('message')[0];
let displayScore = document.querySelector('#hidden-number');
let input = document.getElementsByClassName('input')[0];
let checkBtn = document.querySelector('.btn-primary');
let score = document.getElementsByClassName('score')[0];

// TODO: answer here
newGameBtn.addEventListener("click", resetGame);
checkBtn.addEventListener("click", checkNumber);

function displayMessage(msg) {
  // TODO: answer here
    message.innerHTML = msg;
}

function resetGame() {
  // TODO: answer here
  displayMessage('Lets start guessing...')
  score.innerHTML = 10;
  input.value = '';
  randomNumber = Math.floor(Math.random() * 10) + 1;
  document.querySelector('.number').innerHTML = '?';
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
  let userNumber = parseInt(input.value);
  if (userNumber < 1 || userNumber > 10) {
    displayMessage("Guess any number between 1 and 10")
  } else if (userNumber === randomNumber) {
    displayMessage("Yeay! you guessed it!")
    document.querySelector('.number').innerHTML = userNumber
  } else if (userNumber < randomNumber && userNumber >= 1) {
    displayMessage("Too small, buddy!")
    score.innerHTML = parseInt(score.innerHTML) - 1;
  } else if (userNumber > randomNumber && userNumber <= 10) {
    displayMessage("Oww... that's too big!")
    score.innerHTML = parseInt(score.innerHTML) - 1;
  }
  if (parseInt(score.innerHTML) < 1) {
    displayMessage("Oops, you lost the game")
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber