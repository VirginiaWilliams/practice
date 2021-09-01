/**************************************************/
// 08/31/2021
// Virginia Williams
//
// all javascript for Rock, Paper, Scissors
/**************************************************/

let randnum = Math.floor(Math.random()) + 1;

const playSubmit = document.querySelector(".submit");

function computerPlay(num) {
  alert(num%3);
  return num % 3;
}



playSubmit.addEventListener("click", computerPlay(3));
