/**************************************************/
// 08/31/2021
// Virginia Williams
//
// all javascript for Rock, Paper, Scissors
/**************************************************/

// let randnum = Math.floor(Math.random()) + 1;

const playSubmit = document.querySelector(".submit");
const computerResults = document.querySelector(".computerResults");
const finalResults = document.querySelector(".finalResults");

/**************************************************/
// Functions:
/**************************************************/

// generates random value for the computers turn
function computerPlay() {
  let randnum = Math.floor(Math.random()*3)3;
  return randnum + 1;
}

// calculates results and changes html accordingly
function displayResults(num) {
  let computerNum = computerPlay();
  if (computerNum == 1) {
    //Rock
    computerResults.innerHTML = "Rock";
  }
  else if (computerNum == 2) {
    //Paper
    computerResults.innerHTML = "Paper";
  }
  else if (computerNum == 3){
    //Scissors
    computerResults.innerHTML = "Scissors";
  }
  else {
    //Unexpected
    computerResults.innerHTML = "...";
  }
}


playSubmit.addEventListener("click", function(){displayResults(2)});
