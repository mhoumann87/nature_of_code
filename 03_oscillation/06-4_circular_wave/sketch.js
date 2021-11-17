let phase = 0;
let r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = width / 6;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(8);
  fill(50);

  const increment = TWO_PI / 32;

  beginShape();
  for (let a = 0; a < TWO_PI; a += increment) {
    const r1 = r + sin(a * 10 + phase) * 50;
    const x = r1 * cos(a);
    const y = r1 * sin(a);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.05;
}
