let rockCounter = 0;
let scissorsCounter = 0;
let paperCounter = 0;

for (let i = 0; i < 100; i++) {
  let answer = computerPlay();
  if (answer === "rock") {
    rockCounter++;
  } else if (answer === "paper") {
    paperCounter++;
  } else {
    scissorsCounter++;
  }
}
console.log(
  `Rock: ${rockCounter}, Paper: ${paperCounter}, Scissors: ${scissorsCounter}`
);
