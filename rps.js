/**************************************************/
// 08/31/2021
// Virginia Williams
//
// all javascript for Rock, Paper, Scissors
/**************************************************/

const playSubmit = document.querySelector(".submit");
const computerResults = document.querySelector(".computerResults");
const finalResults = document.querySelector(".finalResults");
const userField = document.querySelector(".userField");

/**************************************************/
// Functions:
/**************************************************/

// generates random value for the computers turn
function computerPlay() {
  let randnum = Math.floor(Math.random()*3);
  if (randnum + 1 == 1) {
    return "Rock";
  }
  else if (randnum + 1 == 2) {
    return "Paper";
  }
  else if (randnum + 1 == 3) {
    return "Scissors";
  }
  else {
    return "error";
  }
}

// calculates results and changes html accordingly
function checkResults() {
  // Calculate user turn
  let userTurn = userField.value;
  // Calculate computer turn
  let computerTurn = computerPlay();

  computerResults.textContent = computerTurn;
  finalResults.textContent = userTurn;

}
