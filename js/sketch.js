let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let currentColor = 'red';
let colorIndex = 1;
let shapeIndex = 0;
let lastTime = 0;
let interval = 80;
let sizeStep = 10;
let circleSize = 60;
let myRandomValue = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(currentColor)
  myRandomValue = random(0,5)
}

function draw() {

  noCursor()

  if (millis() - lastTime > interval){

    circleSize += sizeStep
    if (circleSize >= 240 || circleSize <= 35) {
      sizeStep = -sizeStep
      colorIndex = (colorIndex + 1) % colors.length;
      currentColor = colors[colorIndex];

    }
    lastTime = millis()
  }

  // circle
  fill(currentColor)
  circle(mouseX + myRandomValue, mouseY + myRandomValue, circleSize)

  // inner circle 1
  fill('white')
  circle(mouseX + myRandomValue * 1.2, mouseY + myRandomValue * 1.2, circleSize - 30)
  
  
  
}

// this only fires ONCE per click, not every frame
function mousePressed() {
  currentColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}