const r = 4;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  translate(width * 0.5, height * 0.5);

  const total = floor(width / (r * 2));
  noFill();
  stroke(252, 238, 33);
  strokeWeight(8);

  beginShape();

  for (let i = 0; i < total + 1; i++) {
    const angle = map(i, 0, total, 0, TWO_PI);
    const y = map(sin(angle), -1, 1, -100, 100);
    const x = map(i, 0, total + 1, -300, 300);
    vertex(x, y);
  }

  endShape();
}
