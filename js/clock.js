function setup(){
    createCanvas(windowWidth, windowHeight);
    background(250);
    angleMode(DEGREES);

    let radius = (min(width, height) / 2);
    translate(windowWidth / 2, windowHeight / 2);
    circle(0, 0 ,radius * 2);
    bg = get();
}

function draw(){

image(bg, 0, 0);

radius = (min(width, height) / 2);

let msAngle = map(millis() % 1000, 0, 1000, 0, 360);
let secondAngle = map(second(), 0, 60, 0, 360);
let minuteAngle = map(minute(), 0, 60, 0, 360);
let hourAngle = map(hour(), 0, 12, 0, 360);
    
// puts origin in center of window
translate(windowWidth / 2, windowHeight / 2);

push();
rotate(msAngle);
strokeWeight(1);
stroke(255, 0, 0); // red so it's distinct
line (0, 0, 0, -radius * .5);
pop();


push();
rotate(secondAngle);
strokeWeight(1);
line (0, 0, 0, -radius * .9);
pop();

push();
rotate(minuteAngle);
strokeWeight(2);
line(0,0,0,-radius * .8);
pop();


push();
rotate(-60)
for (let i=0; i < 12; i++){
    line(radius - 50, 0 , radius - 60 ,0);
    text(i + 1, radius - 100,  0 );
    rotate(40);
}

pop();




}