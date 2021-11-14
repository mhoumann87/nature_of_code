let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width * 0.5, height * 0.5);
  fill(252, 238, 33);

  const r = map(sin(angle), -1, 1, 0, 150);

  circle(0, 0, r * 2);

  const increment = TWO_PI / 60;

  angle += increment;
}
