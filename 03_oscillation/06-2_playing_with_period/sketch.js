const angles = [];
const angleV = [];
const r = 16;

function setup() {
  createCanvas(600, 400);

  const total = floor((width / r) * 2);
  for (let i = 1; i < total; i++) {
    angles[i] = 0;
    angleV[i] = 0.01 + i / 100;
  }
}

function draw() {
  background(0);
  translate(width * 0.5, height * 0.5);
  fill(252, 238, 33);
  stroke(252, 238, 33);

  for (let i = 0; i < angles.length; i++) {
    const y = map(sin(angles[i]), -1, 1, -200, 200);
    strokeWeight(4);
    const x = map(i, 0, angles.length, -300, 300);
    line(x, 0, x, y);
    circle(x, y, r * 2);
    angles[i] += angleV[i];
  }
}
