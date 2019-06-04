// Initilize Variables
var pScore = 0;
var cScore = 0;
const resultContainer = document.querySelector("#results");

// Computer choice function
function computerPlay() {
  var choice;
  let x = Math.floor((Math.random() * 3) + 1);
  if (x == 1) {
    choice = "ROCK";
  }
  else if (x == 2) {
    choice = "PAPER";
  }
  else if (x == 3) {
    choice = "SCISSORS";
  }
  return choice
};

// Play round function, checks and outputs result
function playRound(player, computer) {
  if (player.toUpperCase() != "ROCK" && player.toUpperCase() != "PAPER" && player.toUpperCase() != "SCISSORS") {
    return "You did not enter a proper value. \nPick ROCK, PAPER, or SCISSORS";
  }
  if (player.toUpperCase() == "ROCK" && computer.toUpperCase() == "SCISSORS") {
    pScore ++;
    return player.toUpperCase() + " beats " + computer.toUpperCase() + "! You win! The score is: You - " + pScore + " || Computer - " + cScore;
  }
  else if (player.toUpperCase() == "PAPER" && computer.toUpperCase() == "ROCK") {
    pScore ++;
    return player.toUpperCase() + " beats " + computer.toUpperCase() + "! You win! The score is: You - " + pScore + " || Computer - " + cScore;
  }
  else if (player.toUpperCase() == "SCISSORS" && computer.toUpperCase() == "PAPER") {
    pScore ++;
    return player.toUpperCase() + " beats " + computer.toUpperCase() + "! You win! The score is: You - " + pScore + " || Computer - " + cScore;
  }
  else if (computer.toUpperCase() == "ROCK" && player.toUpperCase() == "SCISSORS") {
    cScore ++;
    return computer.toUpperCase() + " beats " + player.toUpperCase() + "! You lose! The score is: You - " + pScore + " || Computer - " + cScore;
  }
  else if (computer.toUpperCase() == "PAPER" && player.toUpperCase() == "ROCK") {
    cScore ++;
    return computer.toUpperCase() + " beats " + player.toUpperCase() + "! You lose! The score is: You - " + pScore + " || Computer - " + cScore;
  }
  else if (computer.toUpperCase() == "SCISSORS" && player.toUpperCase() =="PAPER") {
    cScore ++;
    return computer.toUpperCase() + " beats " + player.toUpperCase() + "! You lose! The score is: You - " + pScore + " || Computer - " + cScore;
  }
  else {
    return "It was a tie! The score is: You " + pScore + " || Computer - " + cScore;
  }
};

// Button event listeners
const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", function(e){
  let result = playRound("rock", computerPlay());
  resultOut = document.createElement("p");
  resultOut.textContent = result;
  resultContainer.appendChild(resultOut);
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", function(e){
  let result = playRound("paper", computerPlay());
  resultOut = document.createElement("p");
  resultOut.textContent = result;
  resultContainer.appendChild(resultOut);
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", function(e){
  let result = playRound("scissors", computerPlay());
  resultOut = document.createElement("p");
  resultOut.textContent = result;
  resultContainer.appendChild(resultOut);
});

function game() {
  for (let i = 1; i <= 5; i ++) {
    var player = prompt();
    console.log(playRound(player, computerPlay()));
  }
};
// game();
