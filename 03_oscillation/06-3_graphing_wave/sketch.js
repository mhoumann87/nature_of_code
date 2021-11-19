/*
 * Here we show a sine wave form angle 0 to TWO_PI, if we want a higher frequency,
 * we can change the PI value eg 2 * TWO_PI.
 */

const angles = [];
const r = 4;
let w, h;

function setup() {
  createCanvas(600, 400);
  h = height * 0.5;
  w = width * 0.5;
  const total = floor(width / (r * 2));

  for (let i = 0; i < total; i++) {
    angles[i] = map(i, 0, total, 0, 2 * TWO_PI);
  }
}

function draw() {
  background(0);
  translate(w, h);
  fill(252, 238, 33);
  stroke(252, 238, 33);

  beginShape();
  for (let i = 0; i < angles.length; i++) {
    const y = map(sin(angles[i]), -1, 1, -h, h);
    strokeWeight(4);
    const x = map(i, 0, angles.length, -w, w);
    circle(x, y, r * 2);
    angles[i] += 0.02;
    //console.log(angles[i]);
  }
  endShape();
}
