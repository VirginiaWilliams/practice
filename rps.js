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
const userField = document.querySelector("userField");

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
function calcResults() {
  // Calculate computer turn
  computerResults.innerHTML = computerPlay();
  // Get user turn
  let userResults = userField.value;
  // alert("comp: " + computerPlay + ". user: ");
  if (computerResults == "Rock") {
    //Rock
    // computerResults.innerHTML = "Rock";
    if (userResults == "Rock") {
      finalResults.innerHTML = "It's a tie!";
    }
    else if (userResults == "Paper") {
      finalResults.innerHTML = "You win!";
    }
    else {
      finalResults.innerHTML = "I win!";
    }
  }
  else if (computerResults == "Paper") {
    //Paper
    // computerResults.innerHTML = "Paper";
    if (userResults == "Rock") {
      finalResults.innerHTML = "I win!";
    }
    else if (userResults == "Paper") {
      finalResults.innerHTML = "It's a tie!";
    }
    else {
      finalResults.innerHTML = "You win!";
    }
  }
  else if (computerResults == "Scissors"){
    //Scissors
    // computerResults.innerHTML = "Scissors";
    if (userResults == "Rock") {
      finalResults.innerHTML = "You win!";
    }
    else if (userResults == "Paper") {
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

// you need to just change it to input dude
playSubmit.addEventListener("click", calcResults);



// function onClick() {
//   var elements = document.getElementsByName("rps");
//   for (i = 0; i < elements.length; i++) {
//     if (elements[i].checked) {
//       playSubmit.addEventListener("click", function(){displayResults(i+1)});
//     }
//   }
// }


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
