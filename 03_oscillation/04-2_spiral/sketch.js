/*
 * Spiral
 */

let angle = 0;
let r = 150;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  translate(width * 0.5, height * 0.5);
  strokeWeight(16);
  stroke(252, 238, 33);
  const x = r * cos(angle);
  const y = r * sin(angle);
  point(x, y);

  angle += 0.04;
  r -= 0.2;
}
