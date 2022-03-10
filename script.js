let rockCounter = 0;
let scissorsCounter = 0;
let paperCounter = 0;

const computerPlay = () => {
  let arrayIndex = Math.floor(Math.random() * 3) + 1;

  switch (arrayIndex) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

console.log(computerPlay);

// for (let i = 0; i < 100; i++) {
//   let answer = computerPlay();
//   if (answer === "rock") {
//     rockCounter++;
//   } else if (answer === "paper") {
//     paperCounter++;
//   } else {
//     scissorsCounter++;
//   }
// }
// console.log(
//   `Rock: ${rockCounter}, Paper: ${paperCounter}, Scissors: ${scissorsCounter}`
// );
