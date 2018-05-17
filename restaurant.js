"use strict";
let dishes = ["Pasta", "Burger", "Risotto", "Soup", "Steak"];
const [first, second, third, fourth, fifth,] = dishes;
let dishesMap = new Map([["Pasta", 2], ["Burger", 5], ["Risotto", 3], ["Soup", 4], ["Steak", 5]]);
// Display dishes function
function displayDish() {
    let i = 0;
    for (let key of dishesMap.keys()) {
        let dishH4 = document.createElement('h4');
        dishH4.appendChild(document.createTextNode(key));
        let dishDivs = document.getElementsByClassName("dish-card")[i];
        dishDivs.prepend(dishH4);
        i++;
    }
}
displayDish();
// Add comments function
function addComments() {
    let dishDivs = document.getElementsByClassName("dish-card");
    let arrDiv = Array.from(dishDivs);
    for (let i = 0; i < arrDiv.length; i++) {
        let text = document.getElementsByTagName("textarea")[i].value;
        let ptag = document.createElement('p');
        ptag.appendChild(document.createTextNode(text));
        let dishDivs = document.getElementsByClassName("dish-card")[i];
        dishDivs.insertBefore(ptag, dishDivs.childNodes[3]);
        text = document.getElementsByTagName("textarea")[i].value = '';
    }
}
// Calling addComments() on a button click
let button1 = document.getElementsByClassName("button1");
let arr = Array.from(button1);
for (let btn of arr) {
    btn.addEventListener("click", () => { addComments(); });
}
// Adding rating function
function addRating() {
}
// let empt = document.getElementsByTagName('p').innerHTML;
// 		  if (empt == null || empt == "")
// 		  {
// 		    dishDivs.insertBefore(ptag, dishDivs.childNodes[3]);
// 		  }
