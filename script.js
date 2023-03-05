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

  //TODO - remove later
  console.log(getPlayerChoice());

  //plays round
  async function playRound() {
    ;
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
    //TODO - remove later
    playRound().then(result => console.log(result));


