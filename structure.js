const numberOfSquares = 8;
// pick our grid container
const gridContainer = document.getElementById("gridContainer");
// remember what you are doing
// random color generator
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * numberOfSquares)];
  }
  return color;
}
// lopp through the number of squares
for (let index = 0; index < numberOfSquares; index++) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = getRandomColor();
  // array.push(newDiv);
  gridContainer.appendChild(newDiv);
}

console.log({ gridContainer });
gridContainer.children = array;
