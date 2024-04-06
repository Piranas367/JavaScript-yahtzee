alert("Hallo Billy, en welkom bij deze Yahtzee spel.Veel speel plezier!");
let userInput = prompt("Voer hier je naam in");
const playerNamePlaceHolder = document.getElementById("player-name");
playerNamePlaceHolder.innerHTML = userInput;

let score = [];
let rollCount = 0;
let currentPlayer = 1;
let isDiceHeld = [false, false, false, false, false];
let diceValues = [1, 1, 1, 1, 1];
const dice = [0, 0, 0, 0, 0, 0];
const dices = [0, 0, 0, 0, 0, 0];
let player1DiceValues = [1, 1, 1, 1, 1];
let SwitchPersoon = true;
let isScorebordHeld = [false, false, false, false, false];
const total = [];

// dobbelsteen te rollen
function rollDice() {
  if (rollCount < 3) {
    const diceElements = document.querySelectorAll(".dice");
    diceElements.forEach((die, index) => {
      if (!isDiceHeld[index]) {
        const value = Math.floor(Math.random() * 6) + 1;
        die.textContent = value;
        diceValues[index] = value;
      }
    });
    rollCount++;
    console.log(diceValues);
    scoreboard1();
    showDice();
    clearHeldDice();
  }
}

function showDice() {
  for (var i = 0; i < 5; i++) {
    if (!isDiceHeld[i]) {
      document.getElementById("dice" + i).innerHTML = diceValues[i];
    }
  }
}

function cellsin(cellId) {
  const cell = document.getElementById(cellId);
  const playerCell = document.getElementById("player1-" + cell.id);
  playerCell.textContent = cell.textContent;
}

function volgendeRonde() {
  clearHeldDice();
  if (rollCount !== 0 && rollCount < 3) {
    return;
  } else if (rollCount === 3) {
    rollDice();
    rollCount = 0;
    document.getElementById("volgende-ronde-btn").disabled = false;
  } else {
    rollDice();
    rollCount++;
    if (rollCount === 3) {
      document.getElementById("volgende-ronde-btn").disabled = true;
    }
  }
  if (rollCount !== 3) {
    alert("Je moet 3 keer rollen voordat je een keuze kunt maken!");
    return;
  }
}

function clearHeldDice() {
  rollCount = 0;
  isDiceHeld = [false, false, false, false, false];
  const diceElements = document.querySelectorAll(".dice");
  diceElements.forEach((die, index) => {
    die.textContent = index + 1;
  });
  const diceButtons = document.querySelectorAll(".dice");
  diceButtons.forEach((button) => {
    button.style.border = "";
  });
  holdDice();
}

function holdDice(diceIndex) {
  isDiceHeld[diceIndex] = !isDiceHeld[diceIndex];
  console.log(isDiceHeld);
  const diceElement = document.getElementById(`dice${diceIndex + 1}`);
  diceElement.style.border = isDiceHeld[diceIndex] ? "2px solid red" : "";
}

//dobbelsteen te resetten
function resetDice() {
  const diceElements = document.querySelectorAll(".dice");
  diceElements.forEach((die) => (die.textContent = "1"));
  rollCount = 0;
  document.getElementById("roll-btn").disabled = false;
  player1DiceValues = [1, 1, 1, 1, 1];
}

function scoreboard1() {
  player1Scores = [0, 0, 0, 0, 0, 0];
  for (i = 0; i < 6; i++) {
    dice[i] = diceValues.filter((num) => num == i + 1).length;
  }
  dices[0] = dice[0] * 1;
  dices[1] = dice[1] * 2;
  dices[2] = dice[2] * 3;
  dices[3] = dice[3] * 4;
  dices[4] = dice[4] * 5;
  dices[5] = dice[5] * 6;

  document.getElementById("player1dsones").innerHTML = dices[0];
  document.getElementById("player1dstwos").innerHTML = dices[1];
  document.getElementById("player1dsthrees").innerHTML = dices[2];
  document.getElementById("player1dsfours").innerHTML = dices[3];
  document.getElementById("player1dsfives").innerHTML = dices[4];
  document.getElementById("player1dssixes").innerHTML = dices[5];
}
