let x
let y
let lineStroke

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);

 
}



function draw() {

strokeWeight(lineStroke)

line(x, y, mouseX, mouseY)

}


function mousePressed() {
  x = mouseX
  y = mouseY

  lineStroke = random(.1,1)

}