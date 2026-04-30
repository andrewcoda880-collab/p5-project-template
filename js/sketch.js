let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let currentColor = 'red';
let colorIndex = 1;
let shapeIndex = 0;
let lastTime = 0;
let interval = 50;
let sizeStep = 10;
let circleSize = 10;
let myRandomValue = random(0,5)

function setup() {
  createCanvas(1000, 1000);
  fill(currentColor)
}

function draw() {

  noCursor()

  if (millis() - lastTime > interval){

    circleSize += sizeStep
    if (circleSize >= 200 || circleSize <= 10) {
      sizeStep = -sizeStep
    }
    lastTime = millis()
  }

  // circle
  fill(currentColor)
  circle(mouseX + myRandomValue, mouseY + myRandomValue, circleSize)

  // inner circle 1
  fill(colors[(colorIndex + 1) % colors.length])
  circle(mouseX + myRandomValue * 1.2, mouseY + myRandomValue * 1.2, circleSize - 30)
  
  // inner circle 2
  fill(colors[(colorIndex + 2) % colors.length])
  circle(mouseX + myRandomValue * 1.3, mouseY + myRandomValue * 1.3, circleSize - 50)
  
 
  
}

// this only fires ONCE per click, not every frame
function mousePressed() {
  currentColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}