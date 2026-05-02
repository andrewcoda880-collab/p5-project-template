let lineX1 = 0;
let lineY1 = 0;
let lineX2 = 0;
let lineY2 = 0;
let lines = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(250);
}

function draw() {
    background(250); 

    lineX2 += random(-30, 30);
    lineY2 += random(-30, 30);

    lineX2 = constrain(lineX2, -windowWidth / 2, windowWidth / 2);
    lineY2 = constrain(lineY2, -windowHeight / 2, windowHeight / 2);

    lines.push({
        x1: lineX1,
        y1: lineY1,
        x2: lineX2,
        y2: lineY2
    });

    if (lines.length > 40) lines.shift();

    for (let l of lines) {
        line(l.x1, l.y1, l.x2, l.y2);
    }

    lineX1 = lineX2;
    lineY1 = lineY2;
}

function mouseClicked() {
    let mX = mouseX - windowWidth / 2; 
    let mY = mouseY - windowHeight / 2;
    lineX1 = mX;
    lineY1 = mY;
    lineX2 = mX;
    lineY2 = mY;
}