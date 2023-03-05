
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 1) {
    return ("Rock");
  } else if (computerChoice == 2) {
    return ("Paper");
  } else if (computerChoice == 3) {
    return ("Scissors");
  }
}

getComputerChoice();

console.log(getComputerChoice);
