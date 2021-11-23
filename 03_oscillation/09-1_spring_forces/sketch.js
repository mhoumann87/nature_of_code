let y = 250;
const restLength = 200;
const k = 0.01;

let velocity = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(112, 50, 126);
  noStroke();
  fill(45, 197, 244);
  circle(width * 0.5, y, 64);

  const x = y - restLength;
  const force = -k * x;

  velocity += force;
  y += velocity;

  velocity *= 0.99;
}
