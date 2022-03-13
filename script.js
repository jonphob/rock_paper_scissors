const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const player_choice = document.querySelector(".p-choice-text");
const comp_choice = document.querySelector(".c-choice-text");
const choices = document.querySelector(".round-choices");
const btn_container = document.querySelector(".btn-container");
let roundCounter = 0;
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

const handleClick = (e) => {
  e.stopPropagation();
  playRound(computerPlay(), e.target.id);
};

btn_container.addEventListener("click", handleClick);

// play round function
const playRound = (c, p) => {
  console.log(`Player chose: ${p}, Computer chose ${c}`);
  if (p === c) {
    calcScore(0);
  } else if (
    (p === "rock" && c === "scissors") ||
    (p === "scissors" && c === "paper") ||
    (p === "paper" && c === "rock")
  ) {
    calcScore(1);
  } else {
    calcScore(-1);
  }
};

const calcScore = (result) => {
  roundCounter++;
  console.log(`Round ${roundCounter}`);
  if (result === 1) {
    playerScore++;
    console.log("You win");
  } else if (result === -1) {
    computerScore++;
    console.log("You lose");
  } else {
    console.log("It's a draw");
  }
  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

  if (playerScore === 5) {
    console.log(`Game Over: You Win`);
    btn_container.removeEventListener("click", handleClick);
  } else if (computerScore === 5) {
    console.log("You lost");
    btn_container.removeEventListener("click", handleClick);
  }
};

const reset = () => {
  roundCounter = 0;
  playerScore = 0;
  computerScore = 0;
};
