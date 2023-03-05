
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return ("Rock");
  } else if (computerChoice === 1) {
    return ("Paper");
  } else if (computerChoice === 2) {
    return ("Scissors");
  }
}

console.log(getComputerChoice());

function getPlayerChoice(playerInput) {
  if (playerInput === "rock") {
    return "Rock";
  } else if (playerInput === "paper") {
    return "Paper";
  } else if (playerInput === "scissors") {
    return "Scissors";
  }
}


//gets element id's for playerchoice
function getPlayerChoice() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const playerChoice = button.id;
      return ("Player chose: " + playerChoice);
    });
  });
}

console.log(getPlayerChoice());

//plays round
function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
}

console.log(playRound());