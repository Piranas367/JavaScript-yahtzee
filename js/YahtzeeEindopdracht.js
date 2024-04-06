alert("Hallo Billy, en welkom bij deze Yahtzee spel.Veel speel plezier!");
let userInput = prompt("Voer hier je naam in");
const playerNamePlaceHolder = document.getElementById("player-name");
playerNamePlaceHolder.innerHTML = userInput;

let rollCount = 0;
let currentPlayer = 1;
let isDiceHeld = [false, false, false, false, false];
let diceValues = [1, 1, 1, 1, 1];
const dice = [0, 0, 0, 0, 0, 0];
const dices = [0, 0, 0, 0, 0, 0];
let player1DiceValues = [1, 1, 1, 1, 1];
let SwitchPersoon = true;
let isScorebordHeld = [false, false, false, false, false];

// dobbelsteen te rollen
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  if (rollCount < 3) {
    const diceElements = document.querySelectorAll(".dice");
    diceElements.forEach((die, index) => {
      if (!isDiceHeld[index]) {
        const value = rollDie();
        die.textContent = value;
        diceValues[index] = value;
      }
    });
    rollCount++;
    console.log(diceValues);
    scoreboard1();
  }
  updateRollCount();
  clearHeldDice();
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
  
  document.getElementById("volgende-ronde-btn").disabled = true;
  
  alert("Je hebt 3 keer gegooid! Klik nu op de tabel om de punten te behouden.");

  // Voeg event listeners toe aan de scorecellen om selectie mogelijk te maken
  document.getElementById("player1-sixes; player1-fives; player1-fours; player1-threes; player1-twos; player1-ones")
  .forEach((cell, index) => {
    cell.addEventListener("click", function selectScore() {
      // Controleer of de scorecel al is geselecteerd, zo niet, selecteer dan en update de scoretabel
      if (!isScorebordHeld[index]) {
        cell.style.backgroundColor = "yellow";
        isScorebordHeld[index] = true;
        // Voeg de geselecteerde score toe aan de subtotaalarray
        subtotaal1[index] = dices[index];
        // Update de innerHTML van de cel met de waarde
        cell.innerHTML = subtotaal1[index];
        // Update de totaalscore
        updateTotalScore();
      }
    });
  });
  updateRollCount();
}

// Functie om de volgende ronde te starten

// Functie om de totaalscore bij te werken
function updateTotalScore() {
  let totalScore = 0;
  // Bereken de totale score door de waarden van alle geselecteerde scores op te tellen
  for (let i = 0; i < subtotaal1.length; i++) {
    totalScore += subtotaal1[i];
  }
  // Update de totale score in de tabel
  document.getElementById("player1-total").innerHTML = totalScore;
}


// Functie om de totaalscore bij te werken
function updateTotalScore() {
  let totalScore = 0;
  // Bereken de totale score door de waarden van alle geselecteerde scores op te tellen
  for (let i = 0; i < subtotaal1.length; i++) {
    totalScore += subtotaal1[i];
  }
  // Update de totale score in de tabel
  document.getElementById("player1-total").innerHTML = totalScore;
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
    button.style.borderColor = "black";
  });
  holdDice();
}

function holdDice(diceIndex) {
  isDiceHeld[diceIndex] = !isDiceHeld[diceIndex];
  const diceElement = document.getElementById(`dice${diceIndex + 1}`);
  diceElement.style.border = isDiceHeld[diceIndex]
    ? "2px solid red"
    : "2px solid black";
}
//dobbelsteen te resetten
function resetDice() {
  const diceElements = document.querySelectorAll(".dice");
  diceElements.forEach((die) => (die.textContent = "1"));
  rollCount = 0;
  document.getElementById("roll-btn").disabled = false;
  player1DiceValues = [1, 1, 1, 1, 1];
}

// code voor de scoreboard
function scoreboard1() {
  player1Scores = [0, 0, 0, 0, 0, 0];
  for (i = 0; i < 6; i++) {
    dice[i] = diceValues.filter((num) => num == i + 1).length;
  }
  console.log(dice);
  dices[0] = dice[0] * 1;
  dices[1] = dice[1] * 2;
  dices[2] = dice[2] * 3;
  dices[3] = dice[3] * 4;
  dices[4] = dice[4] * 5;
  dices[5] = dice[5] * 6;

  document.getElementById("player1-ones").innerHTML = dices[0];
  document.getElementById("player1-twos").innerHTML = dices[1];
  document.getElementById("player1-threes").innerHTML = dices[2];
  document.getElementById("player1-fours").innerHTML = dices[3];
  document.getElementById("player1-fives").innerHTML = dices[4];
  document.getElementById("player1-sixes").innerHTML = dices[5];
}
const subtotaal1 = [0, 0, 0, 0, 0, 0];
function scoreboard1kies(welke) {
  subtotaal1[welke - 1] = dices[welke - 1];
  console.log(subtotaal1);
}
