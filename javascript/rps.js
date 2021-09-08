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
    return "rock";
  }
  else if (randnum + 1 == 2) {
    return "paper";
  }
  else if (randnum + 1 == 3) {
    return "scissors";
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

  //check user input
  userTurn = userTurn.toLowerCase();

  if (userTurn == "rock") {
    if (computerTurn == "rock") {
      finalResults.textContent = "It's a tie!";
    }
    else if (computerTurn == "paper") {
      finalResults.textContent = "I win!";
    }
    else {
      finalResults.textContent = "You win!";
    }
  }
  else if (userTurn == "paper") {
    if (computerTurn == "rock") {
      finalResults.textContent = "You win!";
    }
    else if (computerTurn == "paper") {
      finalResults.textContent = "It's a tie!";
    }
    else {
      finalResults.textContent = "I win!";
    }
  }
  else if (userTurn == "scissors") {
    if (computerTurn == "rock") {
      finalResults.textContent = "I win!";
    }
    else if (computerTurn == "paper") {
      finalResults.textContent = "You win!";
    }
    else {
      finalResults.textContent = "It's a tie!";
    }
  }
  else {
    finalResults.textContent = "Uh oh! Looks like you didn't put in a valid choice... try again!";
    computerResults.textContent = userTurn;
  }


}
