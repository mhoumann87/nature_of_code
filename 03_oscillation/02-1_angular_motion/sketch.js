let angle = 0;
let angularVelocity = 0;
let angularAcceleration = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Set the mouse to control the angularAcceleration
  angularAcceleration = map(mouseX, 0, width, -0.001, 0.001);
  // Set a constraint to the speed
  angularVelocity = constrain(angularVelocity, -0.2, 0.2);

  background(146, 83, 161);
  noStroke();
  fill(240, 99, 164);
  rectMode(CENTER);
  translate(width * 0.5, height * 0.5);
  rotate(angle);
  rect(0, 0, 256, 32);

  // To spin the rectangle. we use the principle we learned about
  // velocity and acceleration.

  angle += angularVelocity;
  angularVelocity += angularAcceleration;
}
