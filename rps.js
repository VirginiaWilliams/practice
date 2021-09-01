/**************************************************/
// 08/31/2021
// Virginia Williams
//
// all javascript for Rock, Paper, Scissors
/**************************************************/

let randnum = Math.floor(Math.random()) + 1;

const playSubmit = document.querySelector(".submit");

function computerPlay(num) {
  console.log(num%3);
  return num % 3;
}

function

playSubmit.addEventListener("click", computerPlay);
