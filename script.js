let playerScore = 0;
let computerScore = 0;

//gets random selection for computer
const computerPlay = () => {
  let index = Math.floor(Math.random() * 3) + 1;
  switch (index) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

// play round function
const playRound = (c, p) => {
  console.log(`Player chose: ${p}, Computer chose ${c}`);
  if (p === c) {
    return 0;
  } else if (
    (p === "rock" && c === "scissors") ||
    (p === "scissors" && c === "paper") ||
    (p === "paper" && c === "rock")
  ) {
    return 1;
  } else {
    return -1;
  }
};

const game = () => {
  let playerSelection = prompt().toLowerCase();
  let computerSelection = computerPlay();
  let result = playRound(computerSelection, playerSelection);

  if (result === 1) {
    playerScore++;
  } else if (result === -1) {
    computerScore++;
  }

  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
};

for (let i = 0; i < 5; i++) {
  game();
}

if (playerScore > computerScore) {
  console.log("You win");
} else if (playerScore < computerScore) {
  console.log("You lose");
} else {
  console.log("It's a draw");
}
