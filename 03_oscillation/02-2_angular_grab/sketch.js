/*
 * You can grab the rectangle and spin it with your mouse.
 */

// Set variables for angle, velocity, acceleration
let angle = 0;
let velocity = 0;
let acceleration = 0;

function setup() {
  createCanvas(600, 600);
}

// Variable to hold the force from the mouse drag and release
let pAngle = 0;

function mouseDragged() {
  const v = createVector(pmouseX - width * 0.5, pmouseY - height * 0.5);
  pAngle = v.heading();
}

function mouseReleased() {
  const v2 = createVector(mouseX - width * 0.5, mouseY - height * 0.5);
  velocity = v2.heading() - pAngle;
}

function draw() {
  if (mouseIsPressed) {
    const v3 = createVector(mouseX - width * 0.5, mouseY - height * 0.5);
    angle = v3.heading();
  }

  background(146, 83, 161);
  noStroke();
  fill(240, 99, 164);
  rectMode(CENTER);
  translate(width * 0.5, height * 0.5);
  rotate(angle);

  rect(0, 0, 256, 32);
  angle += velocity;
  velocity += acceleration;
}
