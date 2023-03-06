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

//TODO - remove later
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
console.log(getComputerChoice());

function getPlayerChoice() {
  return new Promise((resolve, reject) => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const playerChoice = button.id;
        resolve(playerChoice);
      });
    });
  });
}

//TODO - remove later
getPlayerChoice().then(result => console.log(result));

//plays round
async function playRound() {
  const playerSelection = await getPlayerChoice();
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  };
}

//TODO - remove later
playRound().then(result => console.log(result));

//plays a game of five rounds
async function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    console.log(`Round ${i}:`);

    const result = await playRound();
    if (result === "You win!") {
      playerScore++;
    } else if (result === "You lose!") {
      computerScore++;
    }
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    updateScore(playerScore, computerScore); // update score on screen
  }
};

game();

// outputs score on screen
function updateScore(playerScore, computerScore) {
  const playerScoreSpan = document.getElementById("player-score");
  const computerScoreSpan = document.getElementById("computer-score");

  playerScoreSpan.innerHTML = (playerScore);
  computerScoreSpan.innerHTML = (computerScore);
};

function updateText(winner) {
  const winnerUpdate = document.getElementById("winner-text");

  winnerUpdate.innerHTML = ()
}
