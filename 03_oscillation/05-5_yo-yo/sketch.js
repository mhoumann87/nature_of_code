let angle = 0;
let angleV = 0.05;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width * 0.5, height * 0.5);
  fill(252, 238, 33);
  stroke(252, 238, 33);

  const y = map(sin(angle), -1, 1, -200, 200);

  strokeWeight(4);
  line(0, 0, 0, y);
  circle(0, y, 32);
  angle += angleV;
}
