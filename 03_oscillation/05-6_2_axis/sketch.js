let angle1 = 0;
let angle2 = 0;
let angleV1 = 0.07;
let angleV2 = 0.03;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 5);
  translate(width * 0.5, height * 0.5);
  fill(252, 238, 33);
  stroke(252, 238, 33);

  const ampX = (0.9 * width) / 2;
  const ampY = (0.9 * height) / 2;

  const x = map(cos(angle1), -1, 1, -ampX, ampX);
  const y = map(sin(angle2), -1, 1, -ampY, ampY);

  strokeWeight(4);
  line(0, 0, x, y);
  circle(x, y, 32);
  angle1 += angleV1;
  angle2 += angleV2;
}
