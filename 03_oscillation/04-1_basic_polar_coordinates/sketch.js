/*
 * Basic Polar Coordinates
 *
 * Basic trigonometry
 * Sine: p5js function sin()
 * Cosine: p5js function cos()
 * Tangent: p5js function tan()
 */

let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  translate(width * 0.5, height * 0.5);

  const r = 150;
  circle(0, 0, r * 2);

  strokeWeight(32);
  stroke(252, 238, 33);
  const x = r * cos(angle);
  const y = r * sin(angle);
  point(x, y);

  angle += 0.01;
}
