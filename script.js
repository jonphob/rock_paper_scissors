const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choices = document.querySelector(".round-choices");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const scoreContainer = document.querySelector(".score-container");
const btn_container = document.querySelector(".btn-container");
const roundResult = document.querySelector(".round-result");
const playerScoreTable = document.querySelector("#player");
const computerScoreTable = document.querySelector("#computer");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");
const modalBtn = document.querySelector(".btn-play-again");
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

const endGame = (winner) => {
  modal.style.display = "flex";
  modalText.innerText = winner;
  btn_container.removeEventListener("click", handleClick);
};

const resetGame = () => {
  roundCounter = 0;
  playerScore = 0;
  computerScore = 0;
  playerScoreTable.innerText = 0;
  computerScoreTable.innerText = 0;
  modal.style.display = "none";
  playerChoice.innerText = " ";
  computerChoice.innerText = " ";

  btn_container.addEventListener("click", handleClick);
};

modalBtn.addEventListener("click", resetGame);
btn_container.addEventListener("click", handleClick);

// play round function
const playRound = (c, p) => {
  playerChoice.innerText = p.replace(/^\w/, (c) => c.toUpperCase());
  computerChoice.innerText = c.replace(/^\w/, (c) => c.toUpperCase());

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

  if (result === 1) {
    playerScore++;
  } else if (result === -1) {
    computerScore++;
  }

  playerScoreTable.innerText = playerScore;
  computerScoreTable.innerText = computerScore;

  if (playerScore === 5) {
    endGame("You Win");
  } else if (computerScore === 5) {
    endGame("You Lost");
  }
};
