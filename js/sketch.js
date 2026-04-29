let colors = ['red', 'blue', 'green', 'orange', 'purple'];
let currentColor = 'red';
let colorIndex = 1;
let shapeIndex = 0;
let lastTime = 0;
let interval = 50;
let sizeStep = 10;
let circleSize = 10;
let shapeBool = true;

function setup() {
  createCanvas(1000, 1000);
  fill(currentColor)
}

function draw() {

  background(255,255,255,20)

  noCursor()

  if (millis() - lastTime > interval){

    circleSize += sizeStep
    if (circleSize >= 200 || circleSize <= 10) {
      sizeStep = -sizeStep
    }
    lastTime = millis()
  }

  if (mouseIsPressed) {
    fill(currentColor);
  }


  if (shapeBool) {circle(mouseX + random(0,5), mouseY + random(0,5), circleSize);}
  if (!shapeBool) {square((mouseX - (circleSize/2)) + random(0,5), (mouseY - (circleSize/2)) + random(0,5), circleSize)}
  
}

// this only fires ONCE per click, not every frame
function mousePressed() {
  currentColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length

  shapeBool = !shapeBool
}