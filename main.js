var pScore = 0;
var cScore = 0;
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
}
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
}

function game() {
  for (let i = 1; i <= 5; i ++) {
    var player = prompt();
    console.log(playRound(player, computerPlay()));
  }
}
game();
