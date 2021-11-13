/*
 * Random Trail
 */

let angle = 0;
let r = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 10);
  translate(width * 0.5, height * 0.5);
  stroke(252, 238, 33);
  strokeWeight(16);

  const x = r * cos(angle);
  const y = r * sin(angle);
  point(x, y);

  angle += 0.05; //random(-0.1, 0.1);
  r -= random(-2, 2);
}
