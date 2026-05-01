let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let currentColor = 'red';
let colorIndex = 1;
let shapeIndex = 0;
let lastTime = 0;
let interval = 80;
let sizeStep = 10;
let circleSize = 60;
let myRandomValue = 0;
let showInstructions;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  myRandomValue = random(0, 5)
  showInstructions = true;
}

function draw() {

  noCursor()

  if (keyIsDown(32)) {

    showInstructions = false;

    if (millis() - lastTime > interval) {
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
  
  if (showInstructions) {
    text("Press space", windowWidth / 2, windowHeight / 2)
  }

}

function mouseClicked() {
  currentColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}