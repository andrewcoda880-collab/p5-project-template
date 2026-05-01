let circleMax = 250;
let circleMin = 10;
let circleSize = 10;
let sizeStep = 5;
let arcMin = 0;
let arcMax = 240;
let arcSizeStep = 5;
let arcs = [];



function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250);
    angleMode(DEGREES)
}

function draw() {
    background(250);
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

    

    arcs.push({
        x: mX + random(0,20),
        y: mY + random(0,20),
        size: circleSize,
        min: arcMin,
        max: arcMax,
        sw: random(0.1,1)
        }
    );

    if (arcs.length > 10000) arcs.shift();

    for (let a of arcs) {
        strokeWeight(a.sw);
        arc(a.x, a.y, a.size, a.size, a.min, a.max);
        arc(a.x , a.y , a.size + random(0,1), a.size + random(0,1), a.min + 180, a.max + 180);
    }
}