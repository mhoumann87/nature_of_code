/*
 *  Simple pendulum simulation
 */
let angle, bob, len, origin;
let angleVelocity = 0;
let angleAcceleration = 0;
const gravity = 1;

function setup() {
  createCanvas(600, 400);

  origin = createVector(width * 0.5, 0);
  angle = PI / 4;
  bob = createVector();
  len = height * 0.5;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(8);
  fill(127);

  const force = gravity * sin(angle);

  angleAcceleration = (-1 * force) / len;
  angleVelocity += angleAcceleration;
  angle += angleVelocity;

  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
