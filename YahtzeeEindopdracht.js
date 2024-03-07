// De code om de dobbelstenen te gooien
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  const diceElements = document.querySelectorAll(".dice");
  diceElements.forEach((die) => {
    const value = rollDie();
    die.textContent = value;
  });
}

// de code om de dobbelstenen te resetten
document.querySelector(".button.roll").addEventListener("click", rollDice);
function resetDice() {
  const diceElements = document.querySelectorAll(".dice");
  diceElements.forEach((die) => {
    die.textContent = "1";
  });
}
document.querySelector(".button.reset").addEventListener("click", resetDice);
