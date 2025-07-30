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
function createColorList() {
  const colors = []
  for( let i=0; i<4; i++) {
    const color= getRandomColor()
    colors.push(color)
    colors.push(color)
  }
  return colors
}

const colors = createColorList()

// pick an random color from the list
// and get and remove that element
function pickColor() {
  const index=Math.floor(Math.random() * colors.length)
  const picked = colors.splice(index, 1)
  return picked[0]
}

// lopp through the number of squares
for (let index = 0; index < numberOfSquares; index++) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = pickColor();
  // array.push(newDiv);
  gridContainer.appendChild(newDiv);
}

console.log({ gridContainer });
gridContainer.children = array;
