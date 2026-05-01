let circleMax = 250;
let circleMin = 10;
let circleSize = 10;
let sizeStep = 5;
let arcMin = 0;
let arcMax = 200;
let arcSizeStep = 5;
let arcs = [];
let arcTypes;
let arcType = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    angleMode(DEGREES);
    arcTypes = [OPEN, PIE];
}

function draw() {
    background(0);
    translate(windowWidth / 2, windowHeight / 2);
    noFill();

    let mX = mouseX - windowWidth / 2;
    let mY = mouseY - windowHeight / 2;

   
    arcMin += arcSizeStep;
    arcMax += arcSizeStep;
    arcMin = arcMin % 360;
    arcMax = arcMax % 360;

    circleSize += sizeStep;
    if (circleSize <= circleMin - random(0,100) || circleSize >= circleMax + random(0, 10)) {
        sizeStep = -sizeStep;
    }

    
    stroke(255)
    arcs.push({
        x: mX + random(0,20),
        y: mY + random(0,20),
        sizeX: circleSize + random(0,100),
        sizeY: circleSize + random(0,100),
        min: arcMin + random(0,40),
        max: arcMax+ random(0,40),
        sw: random(0.1,1),
        at: arcTypes[arcType],
        }
    );

    if (arcs.length > 500) arcs.shift();

    for (let a of arcs) {
        strokeWeight(a.sw);
        arc(a.x, a.y, a.sizeX, a.sizeY, a.min, a.max, a.at);
    }
}

function keyPressed() {
    arcType = (arcType + 1) % arcTypes.length;
}

