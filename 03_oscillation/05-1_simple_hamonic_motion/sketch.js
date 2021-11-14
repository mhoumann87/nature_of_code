let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width * 0.5, height * 0.5);
  fill(252, 238, 33);

  // to be able to see anything, the p5js sin() function give us a result between
  // -1 and 1, so we use the map() function to give us a visible result.
  // (take the result of sin(angle) that gives a result between -1 and one, and make it
  // between 0 and 150px)
  const r = map(sin(angle), -1, 1, 0, 150);

  circle(0, 0, r * 2);

  angle += 0.01;
}
