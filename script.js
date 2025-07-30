// create a list of four cards in two different colours
const cards = ["green","green","blue","blue"];  
// create a grid
console.log("hi")

// Iteract with html and get the cardCon with its id and store as a variable call cardCupboard
const cardCupboard = document.getElementById("cardCon");

console.log(cardCupboard)


// lopp and make 4 cards
for (let index = 0; index < 4; index++) {
  const newDiv = document.createElement("div");
  newDiv.className = "card"
  cardCupboard.appendChild(newDiv);
}

for (let index = 0; index < cards.length; index++) {
  const newDiv = document.createElement("div");
  newDiv.className = "card1"
  // make it to its color 
  cardCupboard.appendChild(newDiv);
}

// practice loop
for(let i=0; i < 4; i++) {
    console.log("hello")
}




// enable the cards to appear
// all grey
// enable to change colour on click
// on the click of second card do the matching

