let angle = 0;
const r = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();

  translate(width * 0.5, height * 0.5);

  const increment = 0.1;
  noLoop();

  beginShape();

  for (let i = 0; i < TWO_PI; i += increment) {
    const r1 = r + random(-50, 10);
    const x = r1 * cos(i);
    const y = r1 * sin(i);

    vertex(x, y);
  }

  endShape(CLOSE);
}
