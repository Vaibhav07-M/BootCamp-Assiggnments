let RandomNumber1 = Math.floor(Math.random() * 6) + 1; 
let RandomNumber2 = Math.floor(Math.random() * 6) + 1; 

let RandomDiceImage1 = "dice" + RandomNumber1 + ".png"; 
let RandomDiceImage2 = "dice" + RandomNumber2 + ".png"; 

let Source1 = "Dices/" + RandomDiceImage1; 
let Source2 = "Dices/" + RandomDiceImage2; 

let Changer1 = document.querySelectorAll("img")[0]; 
let Changer2 = document.querySelectorAll("img")[1]; 

Changer1.setAttribute("src", Source1); 
Changer2.setAttribute("src", Source2); 

if (RandomNumber1 > RandomNumber2) { 
  document.querySelector("h2").innerHTML = "Player 1 is the winner"; 
} else if (RandomNumber2 > RandomNumber1) { 
  document.querySelector("h2").innerHTML = "Player 2 is the winner"; 
} else { 
  document.querySelector("h2").innerHTML = "It's a draw"; 
}
