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
  let randnum = Math.floor(Math.random()*3);
  return randnum + 1;
}

// calculates results and changes html accordingly
function displayResults(num) {
  let computerNum = computerPlay();
  alert("comp: " + computerNum + ". user: " + num);
  if (computerNum == 1) {
    //Rock
    computerResults.innerHTML = "Rock";
    if (num == 1) {
      finalResults.innerHTML = "It's a tie!";
    }
    else if (num == 2) {
      finalResults.innerHTML = "You win!";
    }
    else {
      finalResults.innerHTML = "I win!";
    }
  }
  else if (computerNum == 2) {
    //Paper
    computerResults.innerHTML = "Paper";
    if (num == 1) {
      finalResults.innerHTML = "I win!";
    }
    else if (num == 2) {
      finalResults.innerHTML = "It's a tie!";
    }
    else {
      finalResults.innerHTML = "You win!";
    }
  }
  else if (computerNum == 3){
    //Scissors
    computerResults.innerHTML = "Scissors";
    if (num == 1) {
      finalResults.innerHTML = "You win!";
    }
    else if (num == 2) {
      finalResults.innerHTML = "I win!";
    }
    else {
      finalResults.innerHTML = "It's a tie!";
    }
  }
  else {
    //Unexpected
    computerResults.innerHTML = "...";
    finalResults.innerHTML = "Hmmmmm something went wrong :(";
  }
}

function onClick() {
  var elements = document.getElementsByName("rps");
  for (i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      playSubmit.addEventListener("click", function(){displayResults(i+1)});
    }
  }
}


// if (document.querySelector('rock').checked) {
//   playSubmit.addEventListener("click", function(){displayResults(1)});
// }
// else if (document.getElementById('paper').checked) {
//   playSubmit.addEventListener("click", function(){displayResults(2)});
// }
// else if (document.getElementById('scissors').checked){
//   playSubmit.addEventListener("click", function(){displayResults(3)});
// }
// else {
//   playSubmit.addEventListener("click", function(){displayResults(4)});
// }
